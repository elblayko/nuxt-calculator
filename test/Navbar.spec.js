import { shallowMount, RouterLinkStub } from "@vue/test-utils"
import Navbar from "@/components/Navbar"

describe("Navbar", () => {
    it("should be a Vue instance", () => {
        const wrapper = shallowMount(Navbar, { stubs: { NuxtLink: RouterLinkStub  }});
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
