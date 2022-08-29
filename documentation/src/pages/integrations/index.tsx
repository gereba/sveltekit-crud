import React from "react";

import Layout from "../../theme/Layout";
import Card from "../../components/integrations/card";
import LargeCard from "../../components/integrations/large-card";
import data from "../../local-json/inegrations.json";
import styles from "./styles.module.css";
import { IntegrationsType } from "../../types/integrations";

const Integrations: React.FC = () => {
    const integrations: IntegrationsType = data;
    const integrationFields = Object.keys(integrations);

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        <span>ADD 3rd PARTY MODULES</span>
                        <span className={styles.headerTitleBold}>
                            AND SOLUTIONS
                        </span>
                    </div>
                    <p className={styles.headerText}>
                        Use your source control & CI/CD Pipeline. Deploy to
                        anywhere, including serverless, edge, cloud workers etc.
                    </p>
                </div>
                <div className={styles.integrationsWrapper}>
                    {integrationFields.map((field) => {
                        return (
                            <div key={field}>
                                <div className={styles.integrationTitle}>
                                    {field.replaceAll("-", " ").toUpperCase()}
                                </div>
                                <div className={styles.integrations}>
                                    {integrations[field].map((integration) => {
                                        if (
                                            field === "ui-framework-packages" ||
                                            field === "frameworks"
                                        ) {
                                            return (
                                                <LargeCard
                                                    title={integration.name}
                                                    description={
                                                        integration.description
                                                    }
                                                    linkUrl={integration.url}
                                                    imageUrl={integration.icon}
                                                />
                                            );
                                        } else if (
                                            field === "community-packages"
                                        ) {
                                            return (
                                                <Card
                                                    title={integration.name}
                                                    description={
                                                        integration.description
                                                    }
                                                    linkUrl={integration.url}
                                                    imageUrl={integration.icon}
                                                    contributer={
                                                        integration
                                                            ?.contributors[0]
                                                    }
                                                />
                                            );
                                        } else {
                                            return (
                                                <Card
                                                    title={integration.name}
                                                    description={
                                                        integration.description
                                                    }
                                                    linkUrl={integration.url}
                                                    imageUrl={integration.icon}
                                                />
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Integrations;
