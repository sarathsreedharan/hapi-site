import PageHero from "@/components/PageHero"
import HorizontalPostsPreviewSection from "@/components/HorizontalPostsPreviewSection"
import PostsPreviewSection from "@/components/PostsPreviewSection"
import NavigationSection from "@/components/NavigationSection"

export default function Home() {
    return (
        <>
            <PageHero
                title="Human Aware Planning and Interaction Lab"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                image="/pages/index/navigation.png"
            />
            <PostsPreviewSection />
            {/* <HorizontalPostsPreviewSection /> */}
            <NavigationSection />
        </>
    )
}
