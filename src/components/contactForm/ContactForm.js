import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ContactForm = ({ className }) => {
    const {
        globalJson: { contact },
    } = useStaticQuery(graphql`
        query {
            globalJson {
                contact {
                    email {
                        base
                    }
                }
            }
        }
    `);

    const [formState, setFormState] = React.useState({
        subject: '',
        message: '',
        name: '',
        lastname: '',
        phone: '',
    });

    function handleChange(e) {
        setFormState((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    }

    return (
        <form className={`flex flex-col gap-4 ${className}`}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="w-full">
                    <label htmlFor="name">Nombre</label>
                    <input
                        className="base-input"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="lastname">Apellido</label>
                    <input
                        className="base-input"
                        name="lastname"
                        id="lastname"
                        required
                        value={formState.lastname}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="phone">Teléfono</label>
                <input
                    className="base-input"
                    name="phone"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="w-full">
                <label htmlFor="subject">Asunto</label>
                <input
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="base-input"
                    name="subject"
                />
            </div>
            <div className="w-full">
                <label htmlFor="message">Mensaje</label>
                <textarea
                    className="base-input"
                    name="message"
                    id="message"
                    required
                    rows="9"
                    value={formState.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <a
                href={`mailto:${contact.email.base}?subject=${
                    formState.subject
                }&body=${formState.message.replace(/\n/g, '%0d%0a')}%0d%0a%0d%0a${
                    formState.phone
                }%0d%0a${formState.name} ${formState.lastname}`}
                className="px-4 py-1 text-white border rounded w-max bg-primary-500 hover:bg-primary-800 border-primary-500"
            >
                Enviar
            </a>
        </form>
    );
};

export default ContactForm;
