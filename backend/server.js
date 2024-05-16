const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const multer = require("multer"); // Import multer for file uploads

const app = express();
const port = 8800;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON-encoded bodies
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const uri =
  "mongodb+srv://hamza-140:Hamza345@lama.hjk6a6p.mongodb.net/?retryWrites=true&w=majority";

// Create a singleton instance of the MongoDB client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB Atlas cluster
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

// Define a function to retrieve jobs from the database
async function getJobs() {
  const database = client.db("JobPortal");
  const collection = database.collection("jobs");
  return collection.find({}).toArray();
}

// Define a function to retrieve a specific job by ID from the database
async function getJobById(jobId) {
  const database = client.db("JobPortal");
  const collection = database.collection("jobs");
  const objectId = new ObjectId(jobId);
  return collection.findOne({ _id: objectId });
}

async function getUserById(userId) {
  const database = client.db("JobPortal");
  const collection = database.collection("users");
  const objectId = new ObjectId(userId);
  return collection.findOne({ _id: objectId });
}
async function getAvatarById(avatarId) {
  const database = client.db("JobPortal");
  const collection = database.collection("users");
  const objectId = new ObjectId(avatarId);
  return collection.findOne({ _id: objectId });
}

async function applyForJob(job_id, applicationData) {
  const database = client.db("JobPortal");
  const collection = database.collection("jobApplications");
  const objectId = new ObjectId(job_id);

  try {
    // Assign current timestamp to createdAt if not provided
    if (!applicationData.createdAt) {
      applicationData.createdAt = new Date();
    }

    const result = await collection.insertOne({
      job_id: objectId,
      ...applicationData,
    });
    return result.insertedId;
  } catch (error) {
    console.error("Error applying for job:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

async function addJob(job) {
  const database = client.db("JobPortal");
  const collection = database.collection("jobs");

  try {
    // Assign current timestamp to createdAt if not provided
    if (!job.createdAt) {
      job.createdAt = new Date();
    }

    const result = await collection.insertOne(job);
    return result.insertedId;
  } catch (error) {
    console.error("Error adding job:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

// Define an Express route to handle job retrieval
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await getJobs();
    res.json(jobs);
  } catch (error) {
    console.error("Error retrieving jobs:", error);
    res.status(500).json({ error: "Error retrieving jobs" });
  }
});
// Define an Express route to handle user login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email and password match a user in the database
    const database = client.db("JobPortal");
    const collection = database.collection("users");
    const user = await collection.findOne({ email, password });

    if (!user) {
      // If no user found, return error response
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // If user found, set login status in local storage

    // Return success response
    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Error during login" });
  }
});

// Define an Express route to handle adding a new job
app.post("/jobs", async (req, res) => {
  const { title, description, creator } = req.body;
  const createdAt = new Date(); // Get current timestamp

  try {
    const jobId = await addJob({ title, description, createdAt, creator }); // Pass createdAt to addJob function
    res.status(201).json({ message: "Job added successfully", jobId });
  } catch (error) {
    console.error("Error adding job:", error);
    res.status(500).json({ error: "Error adding job" });
  }
});

// Define an Express route to handle retrieval of a specific job by ID
app.get("/jobs/:id", async (req, res) => {
  const jobId = req.params.id;
  try {
    const job = await getJobById(jobId);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    console.error("Error retrieving job:", error);
    res.status(500).json({ error: "Error retrieving job" });
  }
});

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Error retrieving user" });
  }
});

// Define an Express route to handle adding a new user
// Define an Express route to handle adding a new user
app.post("/users", upload.single("avatar"), async (req, res) => {
  try {
    console.log("jo", req.body);
    const { name, email, password } = req.body;

    let avatarPath = ""; // Initialize avatarPath

    // Check if req.file exists and has a path
    if (req.file && req.file.path) {
      avatarPath = req.file.path; // Get the path of the uploaded avatar file
    }

    // Log the request body
    console.log("Request Body:", req);

    // Save user details to the database
    const database = client.db("JobPortal");
    const collection = database.collection("users");
    const result = await collection.insertOne({
      name,
      email,
      password,
      avatar: req.file.buffer, // Storing the image buffer directly, you might need to adjust depending on your requirements
    });

    res.status(201).json({
      message: "User added successfully",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Error adding user" });
  }
});

// Define a function to add a new job application to the database

// Define an Express route to handle job applications
app.post("/jobs/:job_id/apply", async (req, res) => {
  const { job_id } = req.params;

  const { user_Id, name, email, phoneNumber } = req.body;
  const user_id = new ObjectId(user_Id);

  console.log(req.body);

  try {
    const applicationId = await applyForJob(job_id, {
      user_id,
      name,
      email,
      phoneNumber,
    });
    res.status(201).json({
      message: "Job application submitted successfully",
      applicationId,
    });
  } catch (error) {
    console.error("Error submitting job application:", error);
    res.status(500).json({ error: "Error submitting job application" });
  }
});

// Define an Express route to retrieve job applications for a specific job
app.get("/jobs/:job_id/applications", async (req, res) => {
  const { job_id } = req.params;
  const objectId = new ObjectId(job_id);

  try {
    const database = client.db("JobPortal");
    const collection = database.collection("jobApplications");
    const applications = await collection.find({ job_id: objectId }).toArray();
    res.json(applications);
  } catch (error) {
    console.error("Error retrieving job applications:", error);
    res.status(500).json({ error: "Error retrieving job applications" });
  }
});
app.post("/api/upload", upload.single("avatar"), async (req, res) => {
  try {
    await client.connect();
    const database = client.db("JobPortal");
    const collection = database.collection("avatars");

    const result = await collection.insertOne({
      avatar: req.file.buffer, // Storing the image buffer directly, you might need to adjust depending on your requirements
    });

    res.status(201).send("Image uploaded successfully");
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).send("Internal Server Error");
  }
});
// Define an Express route to fetch the uploaded avatar
app.get("/avatars/:id", async (req, res) => {
  const avatarId = req.params.id;
  try {
    const avatar = await getAvatarById(avatarId);
    if (!avatar) {
      return res.status(404).json({ error: "Avatar not found" });
    }

    // Set the appropriate content type for the response
    res.set("Content-Type", "image/*");

    // Send the avatar data back to the frontend
    res.send(avatar.avatar);
  } catch (error) {
    console.error("Error retrieving avatar:", error);
    res.status(500).json({ error: "Error retrieving avatar" });
  }
});

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
