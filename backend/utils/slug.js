const slugify = (value) => { /* Crea una función llamada slugify para convertir un texto en un formato adecuado para usarlo como slug */

    return value /* Toma el valor recibido y comienza a transformarlo */

    .toLowerCase() /* Convierte todas las letras a minúsculas */

    .trim() /* Elimina los espacios que estén al inicio y al final */

    .replace(/[^a-z0-9\s-]/g,'') /* Elimina caracteres especiales, dejando letras, números, espacios y guiones */

    .replace(/\s+/g, '-') /* Reemplaza uno o varios espacios consecutivos por un solo guion */

    .replace(/-+/g, '-'); /* Reemplaza varios guiones consecutivos por un solo guion */
};

export default slugify; /* Exporta la función para poder utilizarla en otros archivos */