import React, { ChangeEvent, FormEvent, useState } from "react";
import './App.css';
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";

type FormState = {
    email: string;
    name: string;
    message: string;
}

type Servicemessage = {
    class: string;
    text: string;
}

function Contact() {

    const formId = "AOVPz4Z5";
    const formSparkUrl = `https://submit-form.com/${formId}`;
    // const recaptchaKey = "";
    // const recaptchaRef = useRef<any>();
    const initialFormState = {
        email: "",
        name: "",
        message: ""
    };

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<Servicemessage>();
    const submitForm = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        await postSubmission();
        await postSubmission();
    };


    const postSubmission = async () => {
        const payload = {
            ...formState
        };

        try {
            const result = await axios.post(formSparkUrl, payload)
            console.log(result)
            setMessage({
                class: "bg-green-500",
                text: "Yessir, be right with you!",
            });
            setFormState(initialFormState);
        } catch (error) {
            console.log(error);
            setMessage({
                class: "bg-red-500",
                text: "Sorry, bud but there was an issue. Please try again.",
            })
        }
    }

    const updateFormControl = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        const formKey = id as keyof FormState;
        const updateFormState = { ...formState };
        updateFormState[formKey] = value;
        setFormState(updateFormState);
    };

    // const updateRecaptchaToken = (token: string | null) => {
    // };

    return (

        <div className="flex">
            <div className="contactForm w-auto m-auto ml-8 p-10 justify-left shadow-lg">
                <div>
                    <b>Miguel A. Fernandez, M.Sc.</b>
                </div>
                <hr></hr>
                <div>
                    <h4>1700 Northwest North River Drive</h4>
                    <h5>Miami, Florida 33125</h5>
                    <a href="https://www.linkedin.com/in/miguelfernandez023" className="text-blue-700">Check my LinkedIn!</a>
                    <div></div>
                    <a href="https://github.com/MFernandez6" className="text-green-900">Check my GitHub!</a>
                </div>
            </div>

            <div className="contactForm w-auto m-8 p-8 justify-right shadow-lg">
                <h1 className="text-4xl font-bold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-5 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    Send your message!
                </h1>
                {message && (
                    <div className={`my-4 text-white w-full p-4 ${message.class}`}>
                        {message.text}
                    </div>)}
                <form className="flex flex-col" onSubmit={submitForm}>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="border-2 p-2" id="name" value={formState?.name} onChange={updateFormControl}></input>
                    </div>

                    <div className="my-2 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="border-2 p-2" id="email" value={formState?.email} onChange={updateFormControl}></input>
                    </div>

                    <div className="my-2 flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea
                            onChange={updateFormControl}
                            className="border-2 p-2"
                            id="message"
                            value={formState?.message}
                        ></textarea>
                    </div>

                    {/* <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={updateRecaptchaToken}
                    /> */}

                    <button disabled={submitting} className="my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200">
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;