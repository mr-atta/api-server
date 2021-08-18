"use strict";

const { server } = require("../src/server");
const supertest = require("supertest");
const request = supertest(server); // use the app from the server (server from the line:3)

describe("express server", () => {
  // "/" (200)
  it("shoud check the (Hello) it works successfully", async () => {
    // arrange
    let path = "/";
    let status = 200;

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status); // to be  (same same)
  });

  // (500)
  it("should check 500 errors", async () => {
    // arrange
    let path = "/bad";
    let status = 500;

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  // (404)
  it("shoud check 404 errors", async () => {
    // arrange
    let path = "/notfound";
    let status = 404;
    // act
    const response = await request.get(path);
    // assert
    expect(response.status).toBe(status);
  });

  //////////////////////////////////////////////////// CRUD

  // food

  it("shoud be 200 , food", async () => {
    let path = "/food";
    let status = 200;

    const response = await request.get(path);
    expect(response.status).toEqual(status);
  });

  it("should  post one", async () => {
    let path = "/food";
    let status = 201;

    const reqBody = { firstName: "shhsd", theMeal: "pizza", drink: "7up" };
    const response = await request.post(path).send(reqBody);
    expect(response.status).toEqual(status);
  });

  it("should delete one ", async () => {
    let path = "/food/1/2";
    let status = 204;

    const response = await request.delete(path);
    expect(response.status).toEqual(status);
  });

  it("should put one", async () => {
    let path = "/food/1/1";
    let status = 200;

    const response = await request.put(path);
    expect(response.status).toEqual(status);
  });

  //clothes

  it("should get cloth", async () => {
    let path = "/clothes";
    let status = 200;

    const response = await request.get(path);
    expect(response.status).toEqual(status);
  });

  it("should add one", async () => {
    let path = "/clothes";
    let status = 201;

    let reqBody = {
      firstName: "T-shart",
      lastName: " ",
    };
    const response = await request.post(path).send(reqBody);
    expect(response.status).toEqual(status);
  });

  it("should updeted one ", async () => {
    let path = "/clothes/1/2";
    let status = 200;

    const response = await request.put(path);
    expect(response.status).toEqual(status);
  });

  // it("should delete one", async () => {
  //   let path = "/clothes/1/1";
  //   let status = 204;

  //   const response = await request.delete(path);
  //   expect(response.status).toEqual(status);
  // });
});
