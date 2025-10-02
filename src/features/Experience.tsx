import Card from "../components/EntryCard"
import ss_logo from "../assets/work-sawstop-logo.png"
import tc_logo from "../assets/work-transcat-logo.png"
import omsi_logo from "../assets/work-omsi-logo.png"
import int_logo from "../assets/work-intel-logo.png"

export default function Experience() {
    return (
        <div className="mb-10 w-4xl">
            <h1 className="my-6 text-left font-header font-medium">Experience</h1>
            <Card
                img_url={ss_logo}
                title="Software Engineer"
                entity="SawStop LLC"
                location="Portland, OR"
                start_date="Jul 2022"
                end_date="Aug 2025"
                bullets={[]}
            />
            <Card
                img_url={tc_logo}
                title="Calibration Technician II"
                entity="Transcat, Inc."
                location="Portland, OR"
                start_date="May 2019"
                end_date="Mar 2020"
                bullets={[]}
            />
            <Card
                img_url={omsi_logo}
                title="Technical and Digital Fabricator"
                entity="OMSI"
                location="Portland, OR"
                start_date="Aug 2018"
                end_date="May 2019"
                bullets={[]}
            />
            <Card
                img_url={int_logo}
                title="Calibration Technician"
                entity="Intel Corporation"
                location="Hillsboro, OR"
                start_date="Sept 2014"
                end_date="Aug 2018"
                bullets={[]}
            />
        </div>
    )
}