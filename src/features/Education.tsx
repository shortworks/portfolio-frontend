import EntryCard from "../components/EntryCard"
import psu_light from "../assets/edu-psu-logomark-light.png"
import pcc_light from "../assets/edu-pcc-logomark-light.png"

export default function Education() {
    return (
        <div className="mb-10 w-4xl">
            <h1 className="my-6 text-left font-header font-medium">Education</h1>
            <EntryCard
                img_url={psu_light}
                title="B.S. in Computer Engineering, Minor in Mathematics"
                entity="Portland State University"
                location="Portland, OR"
                end_date="Mar 2022"
            />
            <EntryCard
                img_url={pcc_light}
                title="A.A.S. in Electronic Engineering Technology"
                entity="Portland Community College"
                location="Portland, OR"
                end_date="Sep 2011"
            />
        </div>
    )
}