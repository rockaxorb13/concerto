/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeModelsToFileSystem = writeModelsToFileSystem;
const fs = __importStar(require("fs"));
const fsPath = __importStar(require("path"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const slash = require('slash');
/**
 * Writes a set of model files to disk
 * @param files - the set of files to write, with names and whether they are external
 * @param path - a path to the directory where to write the files
 * @param options - a set of options
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function writeModelsToFileSystem(files, path, options = {}) {
    if (!path) {
        throw new Error('`path` is a required parameter of writeModelsToFileSystem');
    }
    const opts = Object.assign({
        includeExternalModels: true,
    }, options);
    files.forEach(function (file) {
        if (file.external && !opts.includeExternalModels) {
            return;
        }
        // Always assume file names have been normalized from `\` to `/`
        const filename = slash(file.fileName).split('/').pop();
        fs.writeFileSync(path + fsPath.sep + filename, file.definitions);
    });
}
