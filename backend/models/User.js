import { google } from "googleapis"; /* Importa las herramientas de Google */
import mongoose from "mongoose"; /* Permite trabajar con MongoDB */

const userSchema = new mongoose.Schema( /* Define la estructura de los usuarios */
    {
        name:{ /* Nombre del usuario */
            type:String, /* Tipo de dato */
            required: true, /* Campo obligatorio */
            trim: true, /* Elimina espacios al inicio y al final */
        },

        email:{ /* Correo electrónico */
            type: String, /* Tipo de dato */
            required: true, /* Campo obligatorio */
            trim: true, /* Limpia espacios */
            lowercase: true, /* Convierte a minúsculas */
        },

        password: { /* Contraseña */
            type: String, /* Tipo de dato */
            required : true, /* Campo obligatorio */
            trim: true, /* Limpia espacios */
            unique: true, /* No permite valores repetidos */
            lowercase: true, /* Convierte a minúsculas */
        },

        slug: { /* Identificador del usuario */
            type: String, /* Tipo de dato */
            required:true, /* Campo obligatorio */
            trim:true, /* Limpia espacios */
            unique:true, /* Debe ser único */
            lowercase:true, /* Convierte a minúsculas */
        },

        businessName: { /* Nombre del negocio */
            type: String, /* Tipo de dato */
            default:'', /* Valor inicial vacío */
            trim:true, /* Limpia espacios */
        },

        businessDescription: { /* Descripción del negocio */
            type: String, /* Tipo de dato */
            default:'', /* Valor inicial vacío */
            trim:true, /* Limpia espacios */
        },

        brandTheme:{ /* Tema visual */
            type:String, /* Tipo de dato */
            enum: ['emerald', 'indigo','rose', 'amber', 'slate'], /* Opciones permitidas */
            default: 'emerald', /* Tema predeterminado */
        },

        brandAccent:{ /* Color principal de la marca */
            type: String, /* Tipo de dato */
            default: '#047857' /* Color predeterminado */
        },

        timezone:{ /* Zona horaria */
            type:String, /* Tipo de dato */
            default:'America/Bogota', /* Zona horaria predeterminada */
        },

        googleRefreshToken:{ /* Token para renovar el acceso a Google */
            type: String, /* Tipo de dato */
            default: '', /* Valor inicial vacío */
        },

        googleCalendarConnected:{ /* Estado de conexión con Google Calendar */
            type: Boolean, /* Valor verdadero o falso */
            default: false, /* Inicia desconectado */
        },

        googleCalendarId:{ /* Identificador del calendario */
            type: String, /* Tipo de dato */
            default: 'primary', /* Utiliza el calendario principal */
        },

        payoutDetails:{ /* Información para recibir pagos */
            accountHolderName:{ /* Titular de la cuenta */
                type: String, /* Tipo de dato */
                default:'', /* Valor inicial vacío */
                trim:true, /* Limpia espacios */
            },

            bankName:{ /* Nombre del banco */
                type: String, /* Tipo de dato */
                default:'', /* Valor inicial vacío */
                trim:true, /* Limpia espacios */
            },

            accountLast4:{ /* Últimos cuatro dígitos de la cuenta */
                type: String, /* Tipo de dato */
                default:'', /* Valor inicial vacío */
            },

            ifsc:{ /* Código bancario IFSC */
                type: String, /* Tipo de dato */
                default: '', /* Valor inicial vacío */
                trim: true, /* Limpia espacios */
                uppercase: true, /* Convierte a mayúsculas */
            },

            upiId:{ /* Identificador UPI */
                type: String, /* Tipo de dato */
                default:'', /* Valor inicial vacío */
                trim: true, /* Limpia espacios */
            },

            isComplete:{ /* Indica si los datos están completos */
                type: Boolean, /* Valor verdadero o falso */
                default: false, /* Inicia como incompleto */
            },

            updatedAt:{ /* Fecha de última actualización */
                type: Date, /* Tipo fecha */
            },
        },
    },
    {timestamps: true} /* Genera automáticamente las fechas de creación y actualización */
);

const User = mongoose.model('User', userSchema) /* Crea el modelo para los usuarios */
export default User; /* Exporta el modelo para usarlo en otros archivos */