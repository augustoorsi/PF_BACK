const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "confirmacionesairebnb@gmail.com",
    pass: "arssefqosayjgxtj",
  },
});

const enviarCorreoElectronico = async (destinatario: any, asunto: any, cuerpo: any) => {
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

export const enviarConfirmacionReserva = async (usuario: any, propiedad: any) => {
  const asuntoUsuario = "Confirmación de reserva en AireBnB";
  const cuerpoUsuario = `Estimado ${usuario.nombre}, tu reserva en la propiedad ${propiedad.nombre} ha sido confirmada. ¡Disfruta de tu estancia!`;

  const asuntoPropietario = "Nueva reserva en tu propiedad";
  const cuerpoPropietario = `Hola ${propiedad.propietario}, se ha realizado una nueva reserva en tu propiedad ${propiedad.nombre}.`;

  // Enviar correo al usuario
  enviarCorreoElectronico(usuario.email, asuntoUsuario, cuerpoUsuario);

  // Enviar correo al propietario
  enviarCorreoElectronico(propiedad.propietarioEmail, asuntoPropietario, cuerpoPropietario);
};