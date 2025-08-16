import React from 'react'
import { IFeatures } from '../types/type'
import { FileStack, NotepadText, PenTool } from 'lucide-react'
import FeatureCard from './ui/FeatureCard'

const Features = () => {

    const features: Array<IFeatures> = [
        {
            icon: <PenTool />,
            heading: "Real-Time Collaboration",
            paragraph: "Work together seamlessly with live updates and shared workspaces."
        },
        {
            icon: <NotepadText />,
            heading: "Task Management",
            paragraph: "Organize tasks efficiently with customizable boards and deadlines."
        },
        {
            icon: <FileStack />,
            heading: "Secure File Sharing",
            paragraph: "Share files securely with end-to-end encryption."
        }
    ]
  return (
    <section id="features" className="bg-blue-light-secondary">
        <h2 className="font-grotesk text-text-dark text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Mondilla Connect?</h2>
        <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between gap-4 items-center ">
           {
            features.map((feature)=> (
                <FeatureCard feature={feature} key={feature.heading} />
            ))
           }
        </div>
    </section>
  )
}

export default Features