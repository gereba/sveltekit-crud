import { GetServerSideProps } from "next";
import { LayoutWrapper, useGetIdentity } from "@pankod/refine-core";

import { Container, Text } from "@components/ui";
import { getSearchStaticProps } from "@lib/search-props";
import AccountLayout from "@components/account/AccountLayout/AccountLayout";

const ProfilePage: React.FC = () => {
    const { data } = useGetIdentity();

    return (
        <LayoutWrapper>
            <AccountLayout></AccountLayout>
        </LayoutWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const searchProps = await getSearchStaticProps();

        return {
            props: {
                ...searchProps.props,
            },
        };
    } catch (error) {
        return { props: {} };
    }
};

export default ProfilePage;
