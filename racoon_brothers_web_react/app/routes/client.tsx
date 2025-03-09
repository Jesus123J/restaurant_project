import { useState } from 'react';

function LoginPanel() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistro = () => {
        console.log('Registro con:', email, password);
        // Lógica de registro aquí
    };

    const handleIngreso = () => {
        console.log('Ingreso con:', email, password);
        // Lógica de inicio de sesión aquí
    };

    const handleGoogle = () => {
        console.log('Registro con Google');
        // Lógica de autenticación con Google aquí
    };

    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h2>Bienvenido</h2>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    style={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button style={styles.button} onClick={handleIngreso}>
                    Ingreso
                </button>

                <button style={styles.button} onClick={handleRegistro}>
                    Registro
                </button>

                <button style={styles.googleButton} onClick={handleGoogle}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={styles.icon}>
                        <path d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3635H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.2045Z" fill="#4285F4" />
                        <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853" />
                        <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05" />
                        <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335" />
                    </svg>
                    Registro con Google
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
    },
    form: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center' as const, // Añadimos aserción de tipo
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        margin: '0.5rem 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box' as const, // Corregimos aquí
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        margin: '0.5rem 0',
        backgroundColor: '#1a73e8',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
    },
    googleButton: {
        width: '100%',
        padding: '0.75rem',
        margin: '0.5rem 0',
        backgroundColor: '#fff',
        color: '#757575',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        transition: 'background-color 0.3s',
    },
    icon: {
        marginRight: '8px',
    }
};

export default LoginPanel;