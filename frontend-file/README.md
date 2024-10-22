# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






















<form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("Unique No")}  className='form-control mt-5'/>
      <p>{errors.Unique_No?.message}</p>

   
      <input {...register("Creation Date")} className='form-control'/>
      <p>{errors.Creation_Date?.message}</p>


      <input {...register("LAN No")} className='form-control'/>
      <p>{errors.LAN_No?.message}</p>


      <input {...register("Customer Name")} className='form-control'/>
      <p>{errors.Customer_Name?.message}</p>


      <input {...register("Zone")} className='form-control'/>
      <p>{errors.Zone?.message}</p>


      <input {...register("Region")} className='form-control'/>
      <p>{errors.Region?.message}</p>



      <input {...register("Branch")} className='form-control'/>
      <p>{errors.Branch?.message}</p>


      <input {...register("Portfolio")} className='form-control'/>
      <p>{errors.Portfolio?.message}</p>



      <input {...register("POS")} className='form-control'/>
      <p>{errors.POS?.message}</p>


      <input {...register("Other Charges")} className='form-control'/>
      <p>{errors.Other_Charges?.message}</p>

      <input {...register("RC No.")} className='form-control'/>
      <p>{errors.RC_No?.message}</p>


      <input {...register("Chassis No")} className='form-control'/>
      <p>{errors.Chassis_No?.message}</p>


      <input {...register("Engine Number")} className='form-control'/>
      <p>{errors.Engine_Number?.message}</p>


      <input {...register("Make")} className='form-control'/>
      <p>{errors.Make?.message}</p>


      <input {...register("Model")} className='form-control'/>
      <p>{errors.Model?.message}</p>


      <input {...register("Yr of Manufacturing")} className='form-control'/>
      <p>{errors.Yr_of_Manufacturing?.message}</p>


      <input {...register("Repo or Surrender")} className='form-control'/>
      <p>{errors.Repo_or_Surrender?.message}</p>

      <input {...register("LRN Date")} className='form-control'/>
      <p>{errors.LRN_Date?.message}</p>


      <input {...register("Via Sec 17/ Sec 9")} className='form-control'/>
      <p>{errors.Via_Sec_17_Sec_9?.message}</p>


      <input {...register("Do you want to upload your LRN")} className='form-control'/>
      <p>{errors.upload_LRN?.message}</p>

      {/* <input {...register("Do you want to upload your LRN")} className='form-control'/>
      <p>{errors.upload_LRN?.message}</p> */}


      <input {...register("Pre Police Intimation")} className='form-control'/>
      <p>{errors.Pre_Police_Intimation?.message}</p>

      <input {...register("Post Police Intimation")} className='form-control'/>
      <p>{errors.Post_Police_Intimation?.message}</p>


      <input {...register("Inventory Upload")} className='form-control'/>
      <p>{errors.Inventory_Upload?.message}</p>


      <input {...register("Surrender Letter")} className='form-control'/>
      <p>{errors.Surrender_Letter?.message}</p>


      <input {...register("Date of Repo")} className='form-control'/>
      <p>{errors.Date_of_Repo?.message}</p>


      <input {...register("Surrender Date")} className='form-control'/>
      <p>{errors.Surrender_Date?.message}</p>


      <input {...register("Original RC Book Availability ( if the selection is Yes then to capture with Branch or at Stockyard)")} className='form-control'/>
      <p>{errors.Rcbook?.message}</p>

      <input {...register("Branch_or_Stockyard")} className='form-control'/>
      <p>{errors.Branch_or_Stockyard?.message}</p>


      <input {...register("Empanelled Yard")} className='form-control'/>
      <p>{errors.Empanelled_Yard?.message}</p>



      <input {...register("Parking Yard Address")} className='form-control'/>
      <p>{errors.Parking_Yard_Address?.message}</p>



      <input {...register("Yard Contact Person")} className='form-control'/>
      <p>{errors.Yard_Contact_Person?.message}</p>


      <input {...register("Yard Contact Person Contact No")} className='form-control'/>
      <p>{errors.Yard_Contact_Person_Contact_No?.message}</p>



      <input {...register("Yard Rent per day")} className='form-control'/>
      <p>{errors.Yard_Rent_per_day?.message}</p>



      <input {...register("Empanelled Repo Agency")} className='form-control'/>
      <p>{errors.Empanelled_Repo_Agency?.message}</p>


      <input {...register("Repo Agency Name")} className='form-control'/>
      <p>{errors.Repo_Agency_Name?.message}</p>



      <input {...register("Additional Repo Expenses If Any")} className='form-control'/>
      <p>{errors.Additional_Repo_Expenses_If_Any?.message}</p>



      <input {...register("Additon repo expenses amount")} className='form-control'/>
      <p>{errors.Additon_repo_expenses_amount?.message}</p>



      <input {...register("Reasonof additional repo expenses")} className='form-control'/>
      <p>{errors.Reasonof_additional_repo_expenses?.message}</p>


      <input {...register("Normal repo Expenses")} className='form-control'/>
      <p>{errors.Normal_repo_Expenses?.message}</p>


      <input {...register("Total Repo Expenses")} className='form-control'/>
      <p>{errors.Total_Repo_Expenses?.message}</p>
 
      <button className='btn btn-primary'>Submit</button>
    </form>