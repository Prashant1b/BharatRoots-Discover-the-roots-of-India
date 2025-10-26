import "./about.css"

export default function About() {

    return (
        <div className="about-page">

            {/* Introduction */}
            <div id="intro">
                <h1>🌸 Introduction</h1>
                <p>BharatRoots is a digital platform dedicated to celebrating and preserving India’s cultural heritage. 
                It connects learners from India and around the world with local creators, dancers, musicians, and artisans who carry forward the legacy of Indian traditions. 
                Our goal is to make Indian art and heritage accessible, learnable, and admired globally through technology.</p>
            </div>

            {/* Mission */}
            <div id="mission">
                <h1>🎯 Our Mission</h1>
                <ul className="features-list">
                    <li>Empower independent Indian artists by giving them a digital platform to showcase their talent.</li>
                    <li>Enable learners worldwide to discover, learn, and experience India’s cultural richness.</li>
                    <li>Create a sustainable ecosystem where artists earn recognition and income.</li>
                </ul>
            </div>

            {/* Vision */}
            <div id="vision">
                <h1>🌏 Our Vision</h1>
                <ul className="features-list">
                    <li>Become India’s largest cultural learning community.</li>
                    <li>Preserve and teach every art form — from Kathak to Madhubani, Carnatic music to Bamboo craft.</li>
                    <li>Make cultural learning accessible to anyone, anywhere.</li>
                </ul>
            </div>

            {/* What We Offer */}
            <div id="offer">
                <h1>💫 What We Offer</h1>
                <ul className="features-list">
                    <li>🎭 <strong>Learn from Real Creators:</strong> Book trial or paid classes directly from talented Indian artists.</li>
                    <li>🌐 <strong>Multilingual Reading:</strong> Access articles, stories, and cultural content in multiple Indian languages.</li>
                    <li>🏛️ <strong>Virtual Heritage Tours:</strong> Explore historical sites through immersive 360° virtual experiences.</li>
                    <li>🎥 <strong>Free Trial Classes:</strong> Try classes before joining — experience the quality and passion of local artists.</li>
                    <li>🧑‍🎨 <strong>Creator Empowerment:</strong> Give voice and visibility to small artists and artisans, helping them earn recognition and income.</li>
                    <li>🏆 <strong>Weekly Cultural Quizzes & Contests:</strong> Participate in interactive tests and quizzes every week, available in multiple languages, and win rewards while learning about India’s heritage.</li>
                    <li>💬 <strong>User Engagement & Community:</strong> Connect with other learners, comment, share experiences, and participate in discussions.</li>
                    <li>📚 <strong>Personalized Recommendations:</strong> Get AI-driven suggestions for classes, articles, and activities based on your interests.</li>
                    <li>📝 <strong>Content Creation & Sharing:</strong> Users and creators can post content, tutorials, or cultural updates and share them with the community.</li>
                    <li>🔔 <strong>Notifications & Reminders:</strong> Stay updated about upcoming classes, quizzes, and events.</li>
                </ul>
            </div>

            {/* Future Scope */}
            <div id="future-scope">
                <h1>🚀 Future Scope</h1>
                <ul className="features-list">
                    <li>Live class integration with interactive video sessions.</li>
                    <li>AI-based personalized course and article recommendations.</li>
                    <li>AR/VR-based heritage tours for immersive learning experiences.</li>
                    <li>Enhanced community engagement features, including leaderboards and collaborative projects.</li>
                    <li>Expanded multilingual support for wider accessibility.</li>
                </ul>
            </div>

            {/* About App / Copyright */}
            <div id="copyright">
                <h1>📜 About Bharat Roots App</h1>
                <ul className="features-list">
                    <li>Platform designed to connect, inspire, and educate users about Indian culture.</li>
                    <li>Seamless experience for discovering, creating, and sharing content.</li>
                    <li>Profile management for users and creators.</li>
                    <li>Search functionality for profiles and recommended creators.</li>
                    <li>Content creation and management directly from the platform.</li>
                </ul>
            </div>

            {/* Legal & Terms */}
            <div id="legal">
                <h1>⚖️ Legal & Terms</h1>
                <ul className="features-list">
                    <li><strong>Copyright:</strong> All content is protected. Unauthorized use, reproduction, or distribution is prohibited.</li>
                    <li><strong>Terms & Conditions:</strong> Users must comply with our Terms of Service and applicable laws.</li>
                    <li><strong>Privacy Policy:</strong> Personal information is stored securely and not shared without consent.</li>
                    <li><strong>Payment System:</strong> BharatRoots is not responsible to refund any money in case of any circumstances.It is solely responsible to the learner and Creator.So when you do Payment it is advice to first to  take trial class.</li>
                    <li><strong>User Responsibilities:</strong> Maintain account confidentiality. Misuse may result in suspension or termination.</li>
                    <li><strong>Disclaimer:</strong> Bharat Roots is not responsible for third-party content or external links. Content may change without notice.</li>
                </ul>
            </div>

        </div>
    );
}
