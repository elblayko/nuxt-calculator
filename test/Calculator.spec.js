import { mount } from "@vue/test-utils"
import Calculator from "@/components/Calculator"

describe("Calculator", () => {
    it("should be a Vue instance", () => {
        const wrapper = mount(Calculator);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});