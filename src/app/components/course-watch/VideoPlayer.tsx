"use client";

const TabButton = ({ text, isActive = false }: { text: string, isActive?: boolean }) => (
    <button className={`py-3 px-5 font-semibold transition-colors ${isActive ? 'border-b-2 border-orange text-primary' : 'text-secondary hover:text-primary'}`}>
        {text}
    </button>
);

const VideoPlayer = () => {
    return (
        <div className="video-player-wrapper flex-grow bg-white">
            <div className="video-player aspect-video bg-black flex items-center justify-center">
                <p className="text-white">Video Player Placeholder</p>
            </div>

            <div className="course-content-tabs p-6">
                <div className="border-b">
                    <TabButton text="Overview" isActive={true} />
                    <TabButton text="Q&A" />
                    <TabButton text="Notes" />
                    <TabButton text="Announcements" />
                </div>
                <div className="tab-content py-6">
                    <div id="overview">
                        <h3 className="text-2xl font-bold mb-4">About this course</h3>
                        <p className="text-secondary leading-relaxed">
                            It gives you a huge self-satisfaction when you look at your work and say, &quot;I made this!&quot;. I love that feeling after I&apos;m done working on something. When I lean back in my chair, look at the final result with a smile, and have this little &quot;spark joy&quot; moment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;