import { ReadEnvError } from "./utilsJP/errors.js";

let envVars = {};

export const loadEnvVars = async () => {
    try {
      const response = await fetch('./env.json');
      envVars = await response.json();
      if (!envVars.API_WEATHER_KEY) {
        throw new ReadEnvError('API_WEATHER_KEY no está definida en env.json');
      }

    } catch (error) {
        if( error instanceof ReadEnvError)
            console.error('Error cargando variables de entorno:')
        else 
            console.log("Sucedió algún error")
    }
  };

export const getEnvVar = (envVar) => envVars[envVar] ?? '';