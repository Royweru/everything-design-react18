import { ContactForm } from "../contact-form"
import GradientButton from "../shared/gradient-button"

export const Contact = () => {
  return (
    <div className=" container bg-transparent flex flex-col gap-y-3" id="reachout">
        <ContactForm />
        <div className=" w-full justify-center items-center flex">
        <GradientButton content="Submit" />
        </div>
        
    </div>
  )
}
