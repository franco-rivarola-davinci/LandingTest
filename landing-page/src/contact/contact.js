import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Función para validar el email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Limpia previos estados de error
    setEmailError(false);
    setEmailHelperText('');

    // Verifica si el email es válido
    if (!validateEmail(email)) {
      setEmailError(true);
      setEmailHelperText('Por favor, introduce un correo electrónico válido.');
      return; // Detiene el envío del formulario si el email es inválido
    }

    // Preparación de los datos del formulario para enviar
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/moqgpdpk', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Maneja el envío exitoso aquí
        setSubmitted(true);
        // Limpia el formulario si es necesario
        e.target.reset();
        setEmail(''); // También limpia el estado del email
      } else {
        // Maneja errores de envío aquí, si es necesario
        alert('Hubo un problema con el envío del formulario. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      // Maneja errores generales aquí
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="contact">
      {submitted && <div>¡Gracias por contactarnos!</div>}
      <form action="https://formspree.io/f/moqgpdpk" method="POST" onSubmit={handleSubmit}>
        <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
          <TextField name="name" label="Name" variant="outlined" required />
          <TextField 
            name="email" 
            label="Email" 
            variant="outlined" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            error={emailError} 
            helperText={emailHelperText}
          />
          <TextField name="phone" label="Phone" variant="outlined" required />
          <TextField name="reason" label="Reason" variant="outlined" required />
        </Box>

        <Button type="submit" variant="contained" size="medium">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Contact;
