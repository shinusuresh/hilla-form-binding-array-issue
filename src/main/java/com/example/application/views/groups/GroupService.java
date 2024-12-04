package com.example.application.views.groups;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

@BrowserCallable
@AnonymousAllowed
public class GroupService {

    public Group getGroup() {
        var group = new Group();
        group.setName("Group 1");
        group.setPeople(new Person[] {
                new Person("John", 10),
                new Person("Jane", 20)
        });
        return group;

    }

    public Group save(Group group) {
        return group;
    }
}
