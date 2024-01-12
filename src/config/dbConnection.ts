import { AppDataSource } from "../data-source";

async function configureDataSource() {
    try {
        await AppDataSource.initialize();
        console.log("conexion exitosa");

    } catch (error) {
        console.log("conexion no exitosa");

    }
}

configureDataSource();
