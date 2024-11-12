import React from 'react';

const Newsletter = ({ showText, darkButton }) => {
    return (
        <div>
            {showText && <p className="mb-3">Suscríbete a nuestro Newsletter</p>}
            <div id="mc_embed_signup">
                <form
                    action="https://blindscompanyrd.us10.list-manage.com/subscribe/post?u=3736da8317af10994a6bd6316&amp;id=882a9ba426"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    noValidate
                >
                    <div className="flex">
                        <label className="sr-only" htmlFor="mce-EMAIL">
                            Email
                        </label>
                        <input
                            type="mce-EMAIL"
                            id="newsletter-email"
                            required
                            name="EMAIL"
                            placeholder="E-mail"
                            className="rounded-none base-input !rounded-l flex-1 !inline-block max-w-[240px]"
                        />
                        <button
                            className={`text-white ${
                                darkButton ? 'bg-primary-800' : 'bg-primary-500'
                            } hover:bg-primary-900 py-1.5 px-3 rounded-r border border-primary-500`}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
