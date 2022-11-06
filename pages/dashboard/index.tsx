import { ReactElement } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Dashboard = (): ReactElement => {
    return (
        <PageWrapper>
            <ul>
            <li>drink of the day</li>
            <li>my drinks</li>
            <li>most popular</li>
            </ul>
            <ul>
            search by:
            <li>category</li>
            <li>alcohol</li>
            <li>glass</li>
            <li>ingredient</li>
            </ul>
        </PageWrapper>
    )
}

export default Dashboard;
