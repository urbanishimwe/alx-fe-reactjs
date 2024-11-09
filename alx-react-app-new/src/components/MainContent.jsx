import UserProfile from "./UserProfile";
import WelcomeMessage from "./WelcomeMessage";

function MainContent() {
    return (
        <main style={{ margin: '10px' }}>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <WelcomeMessage />
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;