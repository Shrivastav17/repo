import  express  from "express";

import { addRepo,updateRepo,showRepo, showRepoByIdFunction } from "../Controllers/Repo-controller.js";

 const repoRoute = express.Router()
repoRoute.post('/addrepo',addRepo),
repoRoute.get('/showrepo',showRepo),
repoRoute.get('/showrepoById/:id',showRepoByIdFunction),
repoRoute.put('/updaterepo/:id',updateRepo)


export default repoRoute;