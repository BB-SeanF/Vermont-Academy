import Head from 'next/head';
import TOCgrid from '../components/tocGrid';
import TOClayout from '../components/tocLayout';
import TOCtext from '../components/tocText';

export default function TOCpage() {
    return (
        <TOClayout>
            <Head>
                <title>Design Presentation - School Name</title>
            </Head>
            <TOCtext/>
            <TOCgrid/>
        </TOClayout>

    )
}