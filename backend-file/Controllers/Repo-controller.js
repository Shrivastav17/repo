import repoModel from '../Models/repoModal.js';
import multer from 'multer';

const timestamp = Date.now();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/profiles');
    },
    filename: function (req, file, cb) {
        const fileName = timestamp + '-' + file.originalname;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage }).single('user_image');

// Add data
const addRepo = async (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.error('Multer error:', err);
            return res.status(500).json({ error: 'Multer error occurred when uploading.' });
        } else if (err) {
            // An unknown error occurred when uploading.
            console.error('Unknown error:', err);
            return res.status(500).json({ error: 'Unknown error occurred when uploading.' });
        }

        // Everything went fine.
        console.log(req.body);
        console.log(req.file);

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        if (!req.body) {
            return res.status(400).json({ error: 'No data provided.' });
        }

        req.body.user_image = req.file.filename;
        req.body.timestamp = new Date(); // Add current timestamp

        const { rcNo, make, model, lanNo } = req.body;
        const datatoinsert = {
            rcNo,
            make,
            model,
            lanNo,
            user_image: req.body.user_image,
            // Correctly access the file name
            timestamp: req.body.timestamp
        };

        console.log(datatoinsert);

        try {
            const repoModelInstance = new repoModel(datatoinsert);
            const ansafterinsert = await repoModelInstance.save();
            res.status(200).send({ Message: 'Data added', data: ansafterinsert });
        } catch (err) {
            console.error('Error saving data:', err);
            res.status(500).send({ Message: 'Error saving data' });
        }
    });
};
//show data
const showRepo = async (req, res) => {
   const { rcNo, make, model, lanNo } = req.query;
   const filter = {};
 
   if (rcNo) filter.rcNo = rcNo;
   if (make) filter.make = make;
   if (model) filter.model = model;
   if (lanNo) filter.lanNo = lanNo;
 
   try {
     const allData = await repoModel.find(filter).exec();
     res.status(200).send({ Message: 'Data retrieved successfully', data: allData });
   } catch (error) {
     res.status(500).send({ Message: 'Error retrieving data' });
   }
 };


//Update data
const updateRepo = async (req, res) => {

  console.log(req.params)
  try {
      var updateRepo = await repoModel.findByIdAndUpdate(req.params.id, req.body)
      res.send({ msg: 'data updated successfully', data: updateRepo })
  }
  catch (err) {
      res.send({ msg: 'err', data: err })
  }
};

const showRepoByIdFunction = async (req, res) => {
  console.log(req.params);
  try {
      var showRepo = await repoModel.findById(req.params.id)
      res.status(200).send({ msg: 'All Repo Records', data: showRepo })
  }
  catch (err) {
      res.status(403).send({ msg: 'err', data: err })
  }
  // res.send({ msg: 'show Product' })
}


export { addRepo, showRepo, updateRepo,showRepoByIdFunction };

