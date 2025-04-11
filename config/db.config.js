module.exports = {
	development:{
		dialect: "sqlite",
		storage: './database.sqlite'
	},
	production:{
		dialect: "sqlite",
		storage: process.env.RAILWAY_VOLUME_MOUNT_PATH ? 
		`${process.env.RAILWAY_VOLUME_MOUNT_PATH}/database.sqlite` : 
		"./database.sqlite"
	}
};