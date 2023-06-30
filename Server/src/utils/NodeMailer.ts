const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: "confirmacionesairebnb@gmail.com",
    pass: "Airebnb123",
  },
});

const enviarCorreoElectronico = async (destinatario, asunto, cuerpo) => {
  try {
    const info = await transporter.sendMail({
      from: "confirmacionesairebnb@gmail.com",
      to: destinatario,
      subject: asunto,
      text: cuerpo,
    });

    console.log("Correo electrónico enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};

const enviarConfirmacionReserva = async (usuario, propiedad) => {
  const asuntoUsuario = "Confirmación de reserva en AireBnB";
  const cuerpoUsuario = `Estimado ${usuario.nombre}, tu reserva en la propiedad ${propiedad.nombre} ha sido confirmada. ¡Disfruta de tu estancia!`;

  const asuntoPropietario = "Nueva reserva en tu propiedad";
  const cuerpoPropietario = `Hola ${propiedad.propietario}, se ha realizado una nueva reserva en tu propiedad ${propiedad.nombre}.`;

  // Enviar correo al usuario
  enviarCorreoElectronico(usuario.email, asuntoUsuario, cuerpoUsuario);

  // Enviar correo al propietario
  enviarCorreoElectronico(propiedad.propietarioEmail, asuntoPropietario, cuerpoPropietario);
};

// Ejemplo de uso
const usuario = {
  nombre: "John Doe",
  email: "johndoe@example.com",
};

const propiedad = {
  nombre: "Propiedad Ejemplo",
  propietario: "Propietario Ejemplo",
  propietarioEmail: "propietario@example.com",
};

enviarConfirmacionReserva(usuario, propiedad);