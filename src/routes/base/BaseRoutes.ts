import express = require("express");
import {ConfigRouter} from "../RoomConfigRoutes";
import {RoomModelRouter} from "../RoomModelRoutes";
import {RoomParametersRouter} from "../RoomParametersRoutes";
import {BimRouter} from "../BimRoutes";
import {Express} from "express";
var app = express();

export function useRoutes(app: any){

        app.use('/api',new ConfigRouter().getRouter());
        app.use("/api",new RoomModelRouter().getRouter());
        app.use("/api", new RoomParametersRouter().getRouter());
        app.use("/", new BimRouter().getRouter());


}


