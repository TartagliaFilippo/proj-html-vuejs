<script>
import JumboSection from "./sectionsMain/JumboSection.vue";
import CoursesSection from "./sectionsMain/CoursesSection.vue";
import TutoringSection from "./sectionsMain/TutoringSection.vue";
import LearnersSection from "./sectionsMain/LearnersSection.vue";
import NumbersSection from "./sectionsMain/NumbersSection.vue";
import BlogsSection from "./sectionsMain/BlogsSection.vue";

export default {
  components: {
    JumboSection,
    CoursesSection,
    TutoringSection,
    LearnersSection,
    NumbersSection,
    BlogsSection,
  },
};
</script>

<template>
  <div class="container">
    <JumboSection />
    <CoursesSection />
    <TutoringSection />
    <LearnersSection />
    <NumbersSection />
    <BlogsSection />
  </div>
</template>

<style lang="scss" scoped></style>
