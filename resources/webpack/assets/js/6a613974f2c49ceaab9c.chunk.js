webpackJsonp([15],{

/***/ 578:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initShaders = initShaders;\n/**\n * Create a program object and make current\n * @param gl GL context\n * @param vshader a vertex shader program (string)\n * @param fshader a fragment shader program (string)\n * @return true, if the program object was created and successfully made current\n */\nfunction initShaders(gl, vshader, fshader) {\n  var program = createProgram(gl, vshader, fshader);\n  if (!program) {\n    console.log('Failed to create program');\n    return false;\n  }\n\n  gl.useProgram(program);\n  gl.program = program;\n\n  return true;\n}\n\n/**\n * Create the linked program object\n * @param gl GL context\n * @param vshader a vertex shader program (string)\n * @param fshader a fragment shader program (string)\n * @return created program object, or null if the creation has failed\n */\nfunction createProgram(gl, vshader, fshader) {\n  // Create shader object\n  var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);\n  var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);\n  if (!vertexShader || !fragmentShader) {\n    return null;\n  }\n\n  // Create a program object\n  var program = gl.createProgram();\n  if (!program) {\n    return null;\n  }\n\n  // Attach the shader objects\n  gl.attachShader(program, vertexShader);\n  gl.attachShader(program, fragmentShader);\n\n  // Link the program object\n  gl.linkProgram(program);\n\n  // Check the result of linking\n  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);\n  if (!linked) {\n    var error = gl.getProgramInfoLog(program);\n    console.log('Failed to link program: ' + error);\n    gl.deleteProgram(program);\n    gl.deleteShader(fragmentShader);\n    gl.deleteShader(vertexShader);\n    return null;\n  }\n  return program;\n}\n\n/**\n * Create a shader object\n * @param gl GL context\n * @param type the type of the shader object to be created\n * @param source shader program (string)\n * @return created shader object, or null if the creation has failed.\n */\nfunction loadShader(gl, type, source) {\n  // Create shader object\n  var shader = gl.createShader(type);\n  if (shader == null) {\n    console.log('unable to create shader');\n    return null;\n  }\n\n  // Set the shader program\n  gl.shaderSource(shader, source);\n\n  // Compile the shader\n  gl.compileShader(shader);\n\n  // Check the result of compilation\n  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n  if (!compiled) {\n    var error = gl.getShaderInfoLog(shader);\n    console.log('Failed to compile shader: ' + error);\n    gl.deleteShader(shader);\n    return null;\n  }\n\n  return shader;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/webgl/utils.js\n ** module id = 578\n ** module chunks = 7 8 9 10 11 12 13 14 15 16 17 18\n **/\n//# sourceURL=webpack:///./src/lib/webgl/utils.js?");

/***/ },

/***/ 588:
/***/ function(module, exports) {

	eval("'use strict';\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Matrix4 = function Matrix4(matrix) {\n    _classCallCheck(this, Matrix4);\n\n    _initialiseProps.call(this);\n\n    this.matrix = matrix || Matrix4.unitMatrix4();\n}\n/**\n * 求一个矩阵的逆矩阵\n * @param  {Matrix4} matrix 矩阵\n * @return {Float32Array}   矩阵数组\n */\n\n/**\n * 获取透视投影矩阵\n * @param  fov    指定垂直视角，即可视空间顶面和底面间的夹角，必须大于0\n * @param  aspect 指定近剪裁面的宽高比（宽度／高度）\n * @param  near   指定近剪裁面的位置，即可视空间的近边界\n * @param  far    指定远剪裁面的位置，即可视空间的远边界\n * @return matrix 透视投影矩阵\n */\n;\n\nMatrix4.inverseOf = function (matrix) {\n    var i = void 0,\n        s = void 0,\n        d = void 0,\n        inv = void 0,\n        det = void 0;\n\n    s = matrix.matrix;\n    d = new Float32Array(16);\n    inv = new Float32Array(16);\n\n    inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15] + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];\n    inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15] - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];\n    inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15] + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];\n    inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14] - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];\n\n    inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15] - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];\n    inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15] + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];\n    inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15] - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];\n    inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14] + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];\n\n    inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15] + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];\n    inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15] - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];\n    inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15] + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];\n    inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14] - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];\n\n    inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11] - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];\n    inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11] + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];\n    inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11] - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];\n    inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10] + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];\n\n    det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];\n    if (det === 0) {\n        return;\n    }\n\n    det = 1 / det;\n    for (i = 0; i < 16; i++) {\n        d[i] = inv[i] * det;\n    }\n\n    return d;\n};\n\nMatrix4.perspectiveMatrix = function (fov, aspect, near, far) {\n    var matrix = void 0,\n        rd = void 0,\n        s = void 0,\n        ct = void 0;\n\n    if (near === far || aspect === 0) {\n        throw 'null frustum';\n    }\n    if (near <= 0) {\n        throw 'near <= 0';\n    }\n    if (far <= 0) {\n        throw 'far <= 0';\n    }\n\n    fov = Math.PI * fov / 180 / 2;\n    s = Math.sin(fov);\n    if (s === 0) {\n        throw 'null frustum';\n    }\n    rd = 1 / (far - near);\n    ct = Math.cos(fov) / s;\n\n    matrix = new Float32Array(16);\n\n    matrix[0] = ct / aspect;\n    matrix[1] = 0;\n    matrix[2] = 0;\n    matrix[3] = 0;\n\n    matrix[4] = 0;\n    matrix[5] = ct;\n    matrix[6] = 0;\n    matrix[7] = 0;\n\n    matrix[8] = 0;\n    matrix[9] = 0;\n    matrix[10] = -(far + near) * rd;\n    matrix[11] = -1;\n\n    matrix[12] = 0;\n    matrix[13] = 0;\n    matrix[14] = -2 * near * far * rd;\n    matrix[15] = 0;\n    return matrix;\n};\n\nMatrix4.orthoMatrix = function (left, right, bottom, top, near, far) {\n    var matrix = void 0,\n        rw = void 0,\n        rh = void 0,\n        rd = void 0;\n\n    if (left === right || bottom === top || near === far) {\n        throw 'null frustum';\n    }\n\n    rw = 1 / (right - left);\n    rh = 1 / (top - bottom);\n    rd = 1 / (far - near);\n\n    matrix = new Float32Array(16);\n\n    matrix[0] = 2 * rw;\n    matrix[1] = 0;\n    matrix[2] = 0;\n    matrix[3] = 0;\n\n    matrix[4] = 0;\n    matrix[5] = 2 * rh;\n    matrix[6] = 0;\n    matrix[7] = 0;\n\n    matrix[8] = 0;\n    matrix[9] = 0;\n    matrix[10] = -2 * rd;\n    matrix[11] = 0;\n\n    matrix[12] = -(right + left) * rw;\n    matrix[13] = -(top + bottom) * rh;\n    matrix[14] = -(far + near) * rd;\n    matrix[15] = 1;\n\n    return matrix;\n};\n\nMatrix4.viewMatrix = function (eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {\n    var e = void 0,\n        fx = void 0,\n        fy = void 0,\n        fz = void 0,\n        rlf = void 0,\n        sx = void 0,\n        sy = void 0,\n        sz = void 0,\n        rls = void 0,\n        ux = void 0,\n        uy = void 0,\n        uz = void 0;\n\n    fx = centerX - eyeX;\n    fy = centerY - eyeY;\n    fz = centerZ - eyeZ;\n\n    // Normalize f.\n    rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);\n    fx *= rlf;\n    fy *= rlf;\n    fz *= rlf;\n\n    // Calculate cross product of f and up.\n    sx = fy * upZ - fz * upY;\n    sy = fz * upX - fx * upZ;\n    sz = fx * upY - fy * upX;\n\n    // Normalize s.\n    rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);\n    sx *= rls;\n    sy *= rls;\n    sz *= rls;\n\n    // Calculate cross product of s and f.\n    ux = sy * fz - sz * fy;\n    uy = sz * fx - sx * fz;\n    uz = sx * fy - sy * fx;\n\n    var matrix = new Float32Array(16);\n    matrix[0] = sx;\n    matrix[1] = ux;\n    matrix[2] = -fx;\n    matrix[3] = 0;\n\n    matrix[4] = sy;\n    matrix[5] = uy;\n    matrix[6] = -fy;\n    matrix[7] = 0;\n\n    matrix[8] = sz;\n    matrix[9] = uz;\n    matrix[10] = -fz;\n    matrix[11] = 0;\n\n    matrix[12] = 0;\n    matrix[13] = 0;\n    matrix[14] = 0;\n    matrix[15] = 1;\n\n    return Matrix4.multiply(matrix, Matrix4.translateMatrix(-eyeX, -eyeY, -eyeZ));\n};\n\nMatrix4.rotateMatrix = function (angel, x, y, z) {\n    var radian = Math.PI * angel / 180.0;\n    var s = Math.sin(radian);\n    var c = Math.cos(radian);\n\n    if (x !== 0 && y === 0 && z === 0) {\n        if (x < 0) {\n            s = -s;\n        }\n        return Matrix4.rotateXMatrix(s, c);\n    }\n    if (x === 0 && y !== 0 && z === 0) {\n        if (y < 0) {\n            s = -s;\n        }\n        return Matrix4.rotateYMatrix(s, c);\n    }\n    if (x === 0 && y === 0 && z !== 0) {\n        if (z < 0) {\n            s = -s;\n        }\n        return Matrix4.rotateZMatrix(s, c);\n    }\n    var matrix = new Float32Array(16);\n    len = Math.sqrt(x * x + y * y + z * z);\n    if (len !== 1) {\n        rlen = 1 / len;\n        x *= rlen;\n        y *= rlen;\n        z *= rlen;\n    }\n    nc = 1 - c;\n    xy = x * y;\n    yz = y * z;\n    zx = z * x;\n    xs = x * s;\n    ys = y * s;\n    zs = z * s;\n\n    matrix[0] = x * x * nc + c;\n    matrix[1] = xy * nc + zs;\n    matrix[2] = zx * nc - ys;\n    matrix[3] = 0;\n\n    matrix[4] = xy * nc - zs;\n    matrix[5] = y * y * nc + c;\n    matrix[6] = yz * nc + xs;\n    matrix[7] = 0;\n\n    matrix[8] = zx * nc + ys;\n    matrix[9] = yz * nc - xs;\n    matrix[10] = z * z * nc + c;\n    matrix[11] = 0;\n\n    matrix[12] = 0;\n    matrix[13] = 0;\n    matrix[14] = 0;\n    matrix[15] = 1;\n\n    return matrix;\n};\n\nMatrix4.translateMatrix = function (x, y, z) {\n    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);\n};\n\nMatrix4.scaleMatrix = function (Sx, Sy, Sz) {\n    return new Float32Array([Sx, 0, 0, 0, 0, Sy, 0, 0, 0, 0, Sz, 0, 0, 0, 0, 1]);\n};\n\nMatrix4.unitMatrix4 = function () {\n    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);\n};\n\nMatrix4.rotateXMatrix = function (s, c) {\n    return new Float32Array([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]);\n};\n\nMatrix4.rotateYMatrix = function (s, c) {\n    return new Float32Array([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]);\n};\n\nMatrix4.rotateZMatrix = function (s, c) {\n    return new Float32Array([c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);\n};\n\nMatrix4.add = function (matrix1, matrix2) {\n    var len1 = matrix1.length,\n        len2 = matrix2.length;\n    if (len1 != len2) {\n        throw '矩阵1和矩阵2长度不一致';\n    }\n    var matrix = new Float32Array(len1);\n    for (var i = 0; i < len1; i++) {\n        matrix[i] = matrix1[i] + matrix2[i];\n    }\n    return matrix;\n};\n\nMatrix4.subtract = function (matrix1, matrix2) {\n    var matrix = new Float32Array(16);\n    for (var i = 0; i < 16; i++) {\n        matrix[i] = matrix1[i] - matrix2[i];\n    }\n    return matrix;\n};\n\nMatrix4.multiply = function (matrix1, matrix2) {\n    var matrix = new Float32Array(16);\n\n    matrix[0] = matrix1[0] * matrix2[0] + matrix1[4] * matrix2[1] + matrix1[8] * matrix2[2] + matrix1[12] * matrix2[3];\n    matrix[4] = matrix1[0] * matrix2[4] + matrix1[4] * matrix2[5] + matrix1[8] * matrix2[6] + matrix1[12] * matrix2[7];\n    matrix[8] = matrix1[0] * matrix2[8] + matrix1[4] * matrix2[9] + matrix1[8] * matrix2[10] + matrix1[12] * matrix2[11];\n    matrix[12] = matrix1[0] * matrix2[12] + matrix1[4] * matrix2[13] + matrix1[8] * matrix2[14] + matrix1[12] * matrix2[15];\n\n    matrix[1] = matrix1[1] * matrix2[0] + matrix1[5] * matrix2[1] + matrix1[9] * matrix2[2] + matrix1[13] * matrix2[3];\n    matrix[5] = matrix1[1] * matrix2[4] + matrix1[5] * matrix2[5] + matrix1[9] * matrix2[6] + matrix1[13] * matrix2[7];\n    matrix[9] = matrix1[1] * matrix2[8] + matrix1[5] * matrix2[9] + matrix1[9] * matrix2[10] + matrix1[13] * matrix2[11];\n    matrix[13] = matrix1[1] * matrix2[12] + matrix1[5] * matrix2[13] + matrix1[9] * matrix2[14] + matrix1[13] * matrix2[15];\n\n    matrix[2] = matrix1[2] * matrix2[0] + matrix1[6] * matrix2[1] + matrix1[10] * matrix2[2] + matrix1[14] * matrix2[3];\n    matrix[6] = matrix1[2] * matrix2[4] + matrix1[6] * matrix2[5] + matrix1[10] * matrix2[6] + matrix1[14] * matrix2[7];\n    matrix[10] = matrix1[2] * matrix2[8] + matrix1[6] * matrix2[9] + matrix1[10] * matrix2[10] + matrix1[14] * matrix2[11];\n    matrix[14] = matrix1[2] * matrix2[12] + matrix1[6] * matrix2[13] + matrix1[10] * matrix2[14] + matrix1[14] * matrix2[15];\n\n    matrix[3] = matrix1[3] * matrix2[0] + matrix1[7] * matrix2[1] + matrix1[11] * matrix2[2] + matrix1[15] * matrix2[3];\n    matrix[7] = matrix1[3] * matrix2[4] + matrix1[7] * matrix2[5] + matrix1[11] * matrix2[6] + matrix1[15] * matrix2[7];\n    matrix[11] = matrix1[3] * matrix2[8] + matrix1[7] * matrix2[9] + matrix1[11] * matrix2[10] + matrix1[15] * matrix2[11];\n    matrix[15] = matrix1[3] * matrix2[12] + matrix1[7] * matrix2[13] + matrix1[11] * matrix2[14] + matrix1[15] * matrix2[15];\n\n    return matrix;\n};\n\nvar _initialiseProps = function _initialiseProps() {\n    var _this = this;\n\n    this.init = function (matrix) {\n        _this.matrix = matrix || Matrix4.unitMatrix4();\n        return _this;\n    };\n\n    this.multiply = function (matrix) {\n        _this.matrix = Matrix4.multiply(_this.matrix, matrix);\n    };\n\n    this.rotate = function (angel, x, y, z) {\n        _this.matrix = Matrix4.multiply(Matrix4.rotateMatrix(angel, x, y, z), _this.matrix);\n        return _this;\n    };\n\n    this.rotate4 = function (angel, vector, dot) {\n        _this.translate(-dot.x, -dot.y, -dot.z);\n        _this.rotate(angel, vector.x, vector.y, vector.z);\n        _this.translate(dot.x, dot.y, dot.z);\n        return _this;\n    };\n\n    this.translate = function (x, y, z) {\n        _this.matrix = Matrix4.multiply(Matrix4.translateMatrix(x, y, z), _this.matrix);\n        return _this;\n    };\n\n    this.scale = function (Sx, Sy, Sz) {\n        _this.matrix = Matrix4.multiply(Matrix4.scaleMatrix(Sx, Sy, Sz), _this.matrix);\n        return _this;\n    };\n\n    this.view = function (eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {\n        _this.matrix = Matrix4.multiply(Matrix4.viewMatrix(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ), _this.matrix);\n        return _this;\n    };\n\n    this.ortho = function (left, right, bottom, top, near, far) {\n        _this.matrix = Matrix4.multiply(Matrix4.orthoMatrix(left, right, bottom, top, near, far), _this.matrix);\n        return _this;\n    };\n\n    this.perspective = function (fov, aspect, near, far) {\n        _this.matrix = Matrix4.multiply(Matrix4.perspectiveMatrix(fov, aspect, near, far), _this.matrix);\n        return _this;\n    };\n\n    this.transpose = function () {\n        var e = void 0,\n            t = void 0;\n\n        e = _this.matrix;\n\n        t = e[1];e[1] = e[4];e[4] = t;\n        t = e[2];e[2] = e[8];e[8] = t;\n        t = e[3];e[3] = e[12];e[12] = t;\n        t = e[6];e[6] = e[9];e[9] = t;\n        t = e[7];e[7] = e[13];e[13] = t;\n        t = e[11];e[11] = e[14];e[14] = t;\n\n        return _this;\n    };\n\n    this.setOrtho = function (left, right, bottom, top, near, far) {\n        _this.matrix = Matrix4.orthoMatrix(left, right, bottom, top, near, far);\n        return _this;\n    };\n\n    this.setRotate = function (angel, x, y, z) {\n        _this.matrix = Matrix4.rotateMatrix(angel, x, y, z);\n        return _this;\n    };\n\n    this.setTranslate = function (x, y, z) {\n        _this.matrix = Matrix4.translateMatrix(x, y, z);\n        return _this;\n    };\n\n    this.setScale = function (Sx, Sy, Sz) {\n        _this.matrix = Matrix4.scaleMatrix(Sx, Sy, Sz);\n        return _this;\n    };\n\n    this.setView = function (eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {\n        _this.matrix = Matrix4.viewMatrix(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ);\n        return _this;\n    };\n\n    this.setPerspective = function (fov, aspect, near, far) {\n        _this.matrix = Matrix4.perspectiveMatrix(fov, aspect, near, far);\n        return _this;\n    };\n\n    this.setInverseOf = function (matrix) {\n        var inverseMatrix = Matrix4.inverseOf(matrix);\n        if (inverseMatrix) {\n            _this.matrix = inverseMatrix;\n        }\n        return _this;\n    };\n};\n\nmodule.exports = Matrix4;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/webgl/matrix4.js\n ** module id = 588\n ** module chunks = 9 11 12 13 14 15 16 17 18\n **/\n//# sourceURL=webpack:///./src/lib/webgl/matrix4.js?");

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(34);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _WeBGLUtils = __webpack_require__(578);\n\nvar _Matrix = __webpack_require__(588);\n\nvar _Matrix2 = _interopRequireDefault(_Matrix);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar VSHADER_SOURCE = '\\n  attribute vec4 a_Position;\\n  attribute vec4 a_Color;\\n  uniform mat4 u_MvpMatrix;\\n  varying vec4 v_Color;\\n  void main(){\\n    gl_Position = u_MvpMatrix * a_Position;\\n    v_Color = a_Color;\\n  }\\n';\n\nvar FSHADER_SOURCE = '\\n  precision mediump float;\\n  varying vec4 v_Color;\\n  void main(){\\n    gl_FragColor = v_Color;\\n  }\\n';\n\nvar HelloCube = function (_React$Component) {\n  _inherits(HelloCube, _React$Component);\n\n  function HelloCube(props) {\n    _classCallCheck(this, HelloCube);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloCube).call(this, props));\n\n    _this.initVertexBuffer = function (gl) {\n      // Create a cube\n      //    v6----- v5\n      //   /|      /|\n      //  v1------v0|\n      //  | |     | |\n      //  | |v7---|-|v4\n      //  |/      |/\n      //  v2------v3\n      var vertexs = new Float32Array([\n      // Vertex coordinates and color\n      1.0, 1.0, 1.0, 1.0, 1.0, 1.0, // v0 White\n      -1.0, 1.0, 1.0, 1.0, 0.0, 1.0, // v1 Magenta\n      -1.0, -1.0, 1.0, 1.0, 0.0, 0.0, // v2 Red\n      1.0, -1.0, 1.0, 1.0, 1.0, 0.0, // v3 Yellow\n      1.0, -1.0, -1.0, 0.0, 1.0, 0.0, // v4 Green\n      1.0, 1.0, -1.0, 0.0, 1.0, 1.0, // v5 Cyan\n      -1.0, 1.0, -1.0, 0.0, 0.0, 1.0, // v6 Blue\n      -1.0, -1.0, -1.0, 0.0, 0.0, 0.0 // v7 Black\n      ]);\n\n      // Indices of the vertices\n      var indices = new Uint8Array([0, 1, 2, 0, 2, 3, // front\n      0, 3, 4, 0, 4, 5, // right\n      0, 5, 6, 0, 6, 1, // up\n      1, 6, 7, 1, 7, 2, // left\n      7, 4, 3, 7, 3, 2, // down\n      4, 7, 6, 4, 6, 5 // back\n      ]);\n\n      var FSIZE = vertexs.BYTES_PER_ELEMENT;\n\n      var vertexBuffer = gl.createBuffer();\n      var indexBuffer = gl.createBuffer();\n      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);\n      gl.bufferData(gl.ARRAY_BUFFER, vertexs, gl.STATIC_DRAW);\n\n      //a_Position\n      var a_Position = gl.getAttribLocation(gl.program, 'a_Position');\n      if (a_Position < 0) {\n        throw 'Failed to get the storage location of a_Position';\n      }\n      gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0);\n      gl.enableVertexAttribArray(a_Position);\n\n      //a_Color\n      var a_Color = gl.getAttribLocation(gl.program, 'a_Color');\n      if (a_Color < 0) {\n        throw 'Failed to get the storage location of a_Color';\n      }\n      gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);\n      gl.enableVertexAttribArray(a_Color);\n\n      // Write the indices to the buffer object\n      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);\n      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);\n\n      return indices.length;\n    };\n\n    return _this;\n  }\n\n  _createClass(HelloCube, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      try {\n        var canvas = _reactDom2.default.findDOMNode(this.refs['canvas']);\n        canvas.width = 500;\n        canvas.height = 500;\n\n        var gl = canvas.getContext('webgl');\n\n        if (!(0, _WeBGLUtils.initShaders)(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {\n          console.log('Faild to init Shaders');\n          return;\n        }\n\n        var n = this.initVertexBuffer(gl);\n\n        gl.clearColor(0.0, 0.0, 0.0, 1.0);\n        gl.enable(gl.DEPTH_TEST);\n\n        var u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');\n        if (!u_MvpMatrix) {\n          console.log('Failed to get the storage location of u_MvpMatrix');\n          return;\n        }\n\n        var mvpMatrix = new _Matrix2.default();\n        mvpMatrix.setView(3, 3, 7, 0, 0, 0, 0, 1, 0).perspective(30, 1, 1, 100);\n        gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.matrix);\n\n        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\n\n        gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);\n      } catch (e) {\n        console.log(e);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'figure',\n        null,\n        _react2.default.createElement(\n          'figcaption',\n          null,\n          '立方体'\n        ),\n        _react2.default.createElement(\n          'canvas',\n          { ref: 'canvas' },\n          'your current brower don\\'t support canvas,please change another one'\n        )\n      );\n    }\n  }]);\n\n  return HelloCube;\n}(_react2.default.Component);\n\nmodule.exports = HelloCube;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/entry/routes/demos/routes/canvas/webgl/helloCube/HelloCube.js\n ** module id = 611\n ** module chunks = 15\n **/\n//# sourceURL=webpack:///./src/entry/routes/demos/routes/canvas/webgl/helloCube/HelloCube.js?");

/***/ }

});