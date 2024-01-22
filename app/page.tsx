import HomeIntro from "@/components/HomeIntro"
import PostsPreviewSection from "@/components/PostsPreviewSection"

export default function Home() {
  return (
    <>
      <HomeIntro
        title="Human-Aware Planning and Interaction Lab"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <PostsPreviewSection />
    </>
  )
}
