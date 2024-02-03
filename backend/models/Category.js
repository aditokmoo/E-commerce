
const categorySchema = new mongoose.Schema({
    memory: {
        type: String,
        required: [true, 'Provide memory capacity'],
    },
    screenSize: {
        type: String,
        required: [true, 'Provide screen size']
    },
    cpu: {
        type: String,
        required: [true, 'Provide cpu type'],
    },
    numOfCores: {
        type: String,
        required: [true, 'Provide number of cores'],
    },
    mainCamera: {
        type: String,
        required: [true, 'Provide main camera details'],
    },
    frontCamera: {
        type: String,
        required: [true, 'Provide front camera details']
    },
    battery: {
        type: String,
        required: [true, 'Provide battery capacity']
    },
    screenResolution: {
        type: String,
        required: [true, 'Provide screen resoultion']
    },
    screenRefreshRate: {
        type: String,
        requireD: [true, 'Provide screen refresh rate']
    },
    screenType: {
        type: String,
        required: [true, 'Provide screen type']
    }
})