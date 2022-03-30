import Button from "./Button";

export default function Contact() {
    return (
        <div id="contact" className="font-arvo-bold text-prussian-blue space-y-3">
            <h1 className="text-xl"># Contact</h1>
            <p>My inbox is always open, and I'm looking for new opportunities. Whether you have a question, or just want to say hi, I'll get back to you as soon as I can!</p>
            <div><a href="mailto:thefloatingtree@gmail.com"><Button color="red">Say Hello</Button></a></div>
        </div>
    )
}
