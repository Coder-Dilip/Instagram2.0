import Stories from "./Stories"

function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto'>
            <section>
           {/* Stories */}
    <Stories />
            </section>

{/* Post */}
            <section>

            </section>

        </main>
    )
}

export default Feed
