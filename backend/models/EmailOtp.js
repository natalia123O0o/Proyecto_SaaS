import mongoose from "mongoose"; /* Importa Mongoose para crear el esquema y modelo que se utilizarán con MongoDB */

const emailOtpSchema = new mongoose.Schema( /* Define la estructura de los códigos OTP enviados por correo */
    {
        email:{ /* Guarda el correo al que se envió el código OTP */
            type: String,
            required: true,
            trim: true,
            lowercase:true,
        },

        purpose:{ /* Indica para qué proceso fue generado el código OTP */
            type: String,
            enum: ['registration','booking'], /* Limita el propósito a registro o reserva */
        },

        codeHash:{ /* Guarda la versión cifrada del código OTP para no almacenar el código original */
            type: String,
            required: true,
        },

        attempts:{ /* Registra la cantidad de intentos realizados para validar el código */
            type:Number,
            default:0, /* Comienza con cero intentos */
        },

        expireAt:{ /* Define la fecha y hora en la que el código OTP dejará de ser válido */
            type: Date,
            required:true,
            index: { expires: 0}, /* Hace que MongoDB elimine automáticamente el documento cuando llegue esta fecha */
        },

        consumeAt:{ /* Registra cuándo el código OTP fue utilizado correctamente */
            type: Date,
            default: null, /* Permanece vacío mientras el código no haya sido utilizado */
        },

    },

    { timestamps: true } /* Agrega automáticamente las fechas de creación y actualización del registro */
);

const EmailOtp = mongoose.model('EmailOtp', emailOtpSchema); /* Crea el modelo EmailOtp para trabajar con los registros de códigos OTP en MongoDB */

export default EmailOtp; /* Exporta el modelo para utilizarlo en otros archivos */