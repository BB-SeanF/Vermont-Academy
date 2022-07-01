import Head from 'next/head';
import PresImage from '../../components/presImg';
import PresLayout from '../../components/presLayout';
import PresPanel from '../../components/presPanel';
import PresNav from '../../components/presNav';

import { projectFrames, projectInfo } from '../../data/data';

export const getStaticProps = async ({ params }) => {

    const frames = projectFrames.filter(p => p.id.toString() === params.id)
    const totalFrames = projectFrames.length
    const schoolName = projectInfo.name
    return {
        props: {
            frame: frames[0],
            totalFrames,
            schoolName
        }
    }
}

export const getStaticPaths = async () => {
    const paths = projectFrames.map(frame => ({
        params: { id: frame.id.toString() },
    }))
    return { paths, fallback: false }
}

export default function PresentationPage({ frame, totalFrames, schoolName }) {
    return (
        <PresLayout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Design Presentation - {schoolName} - Frame {frame.id} of {totalFrames}</title>
            </Head>
            <PresImage frame={frame} totalFrames={totalFrames} />
            <PresPanel frame={frame} />
            <PresNav frame={frame} totalFrames={totalFrames} />
        </PresLayout>

    );
}