import Head from 'next/head';

import * as Components from '@components';
import * as Layouts from '@layouts';
import * as Config from '@config';
import * as Types from '@types';

const Accessibility: Types.NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <meta name="description" content={`${Config.urls.accessibility.description}`} />
                <meta name="keywords" content={`${Config.urls.accessibility.keywords}`} />
                <link rel="canonical" href={`${Config.urls.accessibility.canonical}`} />
                <title>{Config.urls.accessibility.title}</title>
            </Head>

            <Layouts.Standard fixedHeader={true}>
                <Components.SectionTwo
                    className="bg-teal-50 dark:bg-grey-800"
                    waveFillTop="fill-teal-100 dark:fill-grey-500 transition-colors duration-500"
                    waveFillMiddle="fill-teal-200 dark:fill-grey-600 transition-colors duration-500"
                    waveFillBottom="fill-teal-700 dark:fill-grey-800 transition-colors duration-500"
                >
                    <section className="container mx-auto px-8 pt-8 lg:gap-4 lg:pt-36">
                        <div className="grid grid-cols-1 gap-4 text-grey-900 dark:text-white">
                            <Components.PageTitle text="Accessibility" />
                            <p>
                                This statement applies to content published on{' '}
                                <a href="https://www.int.octopus.ac">https://www.int.octopus.ac</a>.
                            </p>
                            <p>
                                This website has been developed by Jisc. It is designed to be used by as many people as
                                possible. The text should be clear and simple to understand. You should be able to:
                            </p>
                            <ul className="ml-6 list-disc">
                                <li>Change colours, contrast levels and fonts</li>
                                <li>Zoom in up to 400% without problems</li>
                                <li>Navigate most of the website using just a keyboard</li>
                                <li>Navigate most of the website using speech recognition software</li>
                                <li>
                                    Use most of the website using a screen reader (including the most recent versions of
                                    JAWS, NVDA and VoiceOver)
                                </li>
                            </ul>
                            <p>
                                <a href="https://mcmw.abilitynet.org.uk/">AbilityNet</a> has advice on making your
                                device easier to use if you have a disability.
                            </p>
                            <h2 className="mt-10 text-xl font-medium">How accessible is this website</h2>
                            <p>
                                As part of pilot testing, we will be completing full accessibility testing. Improvements
                                will be made throughout this phase. We are not aware of any issues with accessibility.
                            </p>
                            <h2 className="mt-10 text-xl font-medium">
                                How to request content in an accessible format and reporting accessibility problems with
                                this website
                            </h2>
                            <p>
                                If you find any problems that aren’t listed on this page or think we’re not meeting the
                                requirements of the accessibility regulations, please contact{' '}
                                <a href="mailto:web@jisc.ac.uk">help@jisc.ac.uk</a>.
                            </p>
                            <h2 className="mt-10 text-xl font-medium">How we tested this website</h2>
                            <p>
                                We are continuing to test this site using semi-automated testing tools such as Site
                                Improve and Chrome Lighthouse. As part of pilot testing, we will be completing full
                                accessibility testing.
                            </p>
                            <h2 className="mt-10 text-xl font-medium">What we’re doing to improve accessibility</h2>
                            <p>
                                Whenever new features are released they go through our internal quality assurance checks
                                and must meet WCAG 2.1 AA. We’re also committed to working on the issues above.
                            </p>
                            <p>This statement was prepared on 1 March 2022.</p>
                            <p>
                                Content modified from the{' '}
                                <a href="https://www.gov.uk/help/accessibility-statement">
                                    GOV.UK accessibility statement
                                </a>{' '}
                                - used through the{' '}
                                <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
                                    Open Government Licence v3.0
                                </a>
                                .
                            </p>
                        </div>
                    </section>
                </Components.SectionTwo>
            </Layouts.Standard>
        </>
    );
};

export default Accessibility;
