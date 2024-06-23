"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const forgotRoutes_1 = __importDefault(require("./forgotRoutes"));
const formRouter_1 = __importDefault(require("./formRouter"));
const transactionRouter_1 = __importDefault(require("./transactionRouter"));
const callbackRouter_1 = __importDefault(require("./callbackRouter"));
const backOfficeRoute_1 = __importDefault(require("./backOfficeRoute"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const assignRoute_1 = __importDefault(require("./assignRoute"));
const chiefRoute_1 = __importDefault(require("./chiefRoute"));
const rootRouter = (0, express_1.Router)();
rootRouter.use('/auth', authRouter_1.default);
rootRouter.use('/password', forgotRoutes_1.default);
rootRouter.use('/pay', transactionRouter_1.default);
rootRouter.use('/transaction', callbackRouter_1.default);
rootRouter.use('/new', formRouter_1.default);
rootRouter.use('/add', backOfficeRoute_1.default);
rootRouter.use('/all', userRoutes_1.default);
rootRouter.use('/ins', assignRoute_1.default);
rootRouter.use('/status', chiefRoute_1.default);
exports.default = rootRouter;
