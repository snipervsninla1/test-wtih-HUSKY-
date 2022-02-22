import { mount } from "@vue/test-utils";
import ParentComponent from "@/components/ParentComponent";
import ChildComponent from "@/components/ChildComponent";

describe("ParentComponent", () => {
  it("displays 'Emitted!' when custom event is emitted", () => {
    const wrapper = mount(ParentComponent);
    wrapper.find(ChildComponent).vm.$emit("custom");
    expect(wrapper.html()).toContain("Emitted!");
  });
});
