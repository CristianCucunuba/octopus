import React from 'react';
import Head from 'next/head';

import * as Interfaces from '@interfaces';
import * as Components from '@components';
import * as Helpers from '@helpers';
import * as Layouts from '@layouts';
import * as Config from '@config';
import * as Types from '@types';
import * as api from '@api';

export const getServerSideProps: Types.GetServerSideProps = async (context) => {
    const requestedId = context.query.id;
    let publication: Interfaces.Publication | null = null;
    let error: string | null = null;

    try {
        const response = await api.get(`${Config.endpoints.publications}/${requestedId}`, undefined);
        publication = response.data;
    } catch (err) {
        const { message } = err as Interfaces.JSONResponseError;
        error = message;
    }

    if (!publication || error) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            publication
        }
    };
};

type Props = {
    publication: Interfaces.Publication;
};

const Publication: Types.NextPage<Props> = (props): React.ReactElement => {
    const linkedPublicationsTo = props.publication.linkedTo;
    const linkedPublicationsFrom = props.publication.linkedFrom.filter(
        (link) => link.publicationFromRef.type !== 'PROBLEM' && link.publicationFromRef.type !== 'PEER_REVIEW'
    );

    const peerReviews = props.publication.linkedFrom.filter((link) => link.publicationFromRef.type === 'PEER_REVIEW');
    const problems = props.publication.linkedFrom.filter((link) => link.publicationFromRef.type === 'PROBLEM');

    const list = [];

    const showProblems = problems.length && props.publication.type !== 'PEER_REVIEW';
    const showPeerReviews = peerReviews.length && props.publication.type !== 'PEER_REVIEW';

    if (showProblems) list.push({ title: 'Problems', href: 'problems' });

    if (showPeerReviews) list.push({ title: 'Peer reviews', href: 'peer-reviews' });

    const sectionList = [
        { title: 'Publication chain', href: 'publication-chain' },
        { title: 'Main text', href: 'main-text' },
        ...list,
        { title: 'Conflict of interest', href: 'coi' }
    ];

    return (
        <>
            <Head>
                <meta name="description" content={props.publication.description || ''} />
                <meta name="keywords" content={props.publication.keywords.join(', ') || ''} />
                <link rel="canonical" href={`${Config.urls.viewPublication.canonical}/${props.publication.url_slug}`} />
                <title>{`${props.publication.title} - ${Config.urls.viewPublication.title}`}</title>
            </Head>
            <Layouts.Publication fixedHeader={false}>
                <section className="col-span-9">
                    <header className="">
                        <h1 className="mb-4 block font-montserrat text-2xl font-bold leading-tight text-grey-800 transition-colors duration-500 dark:text-white-50 md:text-3xl xl:w-4/5 xl:text-3xl xl:leading-normal">
                            {props.publication.title}
                        </h1>

                        <Components.Link
                            href={`${Config.urls.viewUser.path}/${props.publication.user.id}`}
                            className="2 mb-8 block w-fit rounded outline-0 hover:underline focus:ring-2 focus:ring-yellow-400"
                        >
                            <p className="text-normal block leading-relaxed text-teal-600 transition-colors duration-500 dark:text-grey-100">
                                {props.publication.user.firstName} {props.publication.user.lastName}
                            </p>
                        </Components.Link>

                        {props.publication.type !== 'PEER_REVIEW' && (
                            <div className="hidden xl:block">
                                <Components.PublicationVisualChain highlighted={props.publication.type} />
                            </div>
                        )}

                        <div className="block xl:hidden">
                            <Components.PublicationRatings publication={props.publication} />
                        </div>
                    </header>

                    <Components.PublicationContentSection id="publication-chain" title="Publication chain" hasBreak>
                        <>
                            <p className="mb-8 block text-grey-800 transition-colors duration-500 dark:text-white-50">
                                All publications live within a chain. Since this publication is a{' '}
                                <Components.Link
                                    href="#"
                                    className="text-teal-600 underline transition-colors duration-500 dark:text-teal-400"
                                >
                                    <>{Helpers.formatPublicationType(props.publication.type)}</>
                                </Components.Link>
                                .{' '}
                                {props.publication.type !== 'PROBLEM' && (
                                    <>
                                        The publications preceeding this are{' '}
                                        <Components.Link
                                            href="#"
                                            className="text-teal-600 underline transition-colors duration-500 dark:text-teal-400"
                                        >
                                            <>
                                                {Helpers.formatPublicationType(
                                                    Helpers.findPreviousPublicationType(props.publication.type)
                                                )}
                                            </>
                                        </Components.Link>
                                        .
                                    </>
                                )}{' '}
                                {props.publication.type !== 'PEER_REVIEW' &&
                                    props.publication.type !== 'REAL_WORLD_APPLICATION' && (
                                        <>
                                            The publications following this are{' '}
                                            <Components.Link
                                                href="#"
                                                className="text-teal-600 underline transition-colors duration-500 dark:text-teal-400"
                                            >
                                                <>
                                                    {Helpers.formatPublicationType(
                                                        Helpers.findNextPublicationType(props.publication.type)
                                                    )}
                                                </>
                                            </Components.Link>
                                            .
                                        </>
                                    )}
                            </p>
                            {linkedPublicationsTo.length || linkedPublicationsFrom.length ? (
                                <Components.RenderLinks to={linkedPublicationsTo} from={linkedPublicationsFrom} />
                            ) : (
                                <p className="block leading-relaxed text-grey-800 transition-colors duration-500 dark:text-grey-100">
                                    {`This ${Helpers.formatPublicationType(
                                        props.publication.type
                                    )} does not have any linked to publications.`}
                                </p>
                            )}
                        </>
                    </Components.PublicationContentSection>

                    {/** Full text */}
                    <Components.PublicationContentSection id="main-text" hasBreak>
                        <div className="mb-4">
                            <Components.ParseHTML content={props.publication.content ?? ''} />
                        </div>
                    </Components.PublicationContentSection>

                    {/* Linked from problems */}
                    {!!showProblems && (
                        <Components.PublicationContentSection
                            id="problems"
                            title={`Problems created from this ${Helpers.formatPublicationType(
                                props.publication.type
                            )}`}
                            hasBreak
                        >
                            <Components.List ordered={false}>
                                {problems.map((link) => (
                                    <Components.ListItem
                                        key={link.id}
                                        className="flex items-center font-semibold leading-3"
                                    >
                                        <Components.PublicationLink
                                            publicationRef={link.publicationFromRef}
                                            showType={false}
                                        />
                                    </Components.ListItem>
                                ))}
                            </Components.List>
                        </Components.PublicationContentSection>
                    )}

                    {/* Linked peer reviews */}
                    {!!showPeerReviews && (
                        <Components.PublicationContentSection
                            id="peer-reviews"
                            title={`Peer reviews created from this ${Helpers.formatPublicationType(
                                props.publication.type
                            )}`}
                            hasBreak
                        >
                            <Components.List ordered={false}>
                                {peerReviews.map((link) => (
                                    <Components.ListItem
                                        key={link.id}
                                        className="flex items-center font-semibold leading-3"
                                    >
                                        <Components.PublicationLink
                                            publicationRef={link.publicationFromRef}
                                            showType={false}
                                        />
                                    </Components.ListItem>
                                ))}
                            </Components.List>
                        </Components.PublicationContentSection>
                    )}

                    {/** Conflict of interest */}
                    <Components.PublicationContentSection id="coi" title="Conflict of interest">
                        <p className="block leading-relaxed text-grey-800 transition-colors duration-500 dark:text-grey-100">
                            {props.publication.conflictOfInterestStatus
                                ? props.publication.conflictOfInterestText
                                : `This ${Helpers.formatPublicationType(
                                      props.publication.type
                                  )} does not have any specified conflicts of interest.`}
                        </p>
                    </Components.PublicationContentSection>
                </section>

                <aside className="relative col-span-3 hidden xl:block">
                    <div className="sticky top-12 space-y-8">
                        <Components.PublicationRatings publication={props.publication} sectionList={sectionList} />
                    </div>
                </aside>
            </Layouts.Publication>
        </>
    );
};

export default Publication;
