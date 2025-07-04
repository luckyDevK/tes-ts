"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // ✅ MUST come before anything uses process.env
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 8080;
app_1.default.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map