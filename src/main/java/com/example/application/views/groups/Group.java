package com.example.application.views.groups;

public class Group {

    private String name;
    private Person[] people = new Person[10];

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Person[] getPeople() {
        return people;
    }

    public void setPeople(Person[] people) {
        this.people = people;
    }

}
