import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import configureMockStore from "redux-mock-store";

import Films from "../../../views/films/films";
import FilmCard from "../../film-card/film-card";

const data = {
  id: 250,
  url: "https://www.tvmaze.com/shows/250/kirby-buckets",
  name: "Kirby Buckets",
  type: "Scripted",
  language: "English",
  genres: ["Comedy"],
  status: "Ended",
  runtime: 30,
  averageRuntime: 30,
  premiered: "2014-10-20",
  officialSite: "http://disneyxd.disney.com/kirby-buckets",
  schedule: {
    time: "07:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  rating: {
    average: 4,
  },
  weight: 0,
  network: {
    id: 25,
    name: "Disney XD",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York",
    },
  },
  webChannel: {
    id: 83,
    name: "DisneyNOW",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York",
    },
  },
  dvdCountry: null,
  externals: {
    tvrage: 37394,
    thetvdb: 278449,
    imdb: "tt3544772",
  },
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg",
  },
  summary:
    "<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>",
  updated: 1617744408,
  _links: {
    self: {
      href: "https://api.tvmaze.com/shows/250",
    },
    previousepisode: {
      href: "https://api.tvmaze.com/episodes/1051658",
    },
  },
  favorite: true,
};

const initialState = {
  loading: false,
  films: [data],
  allFilms: [],
  query: "",
  page: 0,
  favorite: [],
};

const mockStore = configureMockStore([createSagaMiddleware()]);
const store = mockStore({
  addFilmsReducer: initialState,
});

const setup = (props) =>
  render(
    <Provider store={store}>
      <FilmCard {...props} />
    </Provider>
  );

const setupApp = () =>
  render(
    <Provider store={store}>
      <Films />
    </Provider>
  );

describe("<FilmCard />", () => {
  let originFetch;
  beforeEach(() => {
    originFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      })
    );
  });

  afterEach(() => {
    global.fetch = originFetch;
  });

  it("should not explode", () => {
    const { getByTestId } = setup({ data });
    expect(getByTestId("filmCard")).toBeTruthy();
  });

  it("should render image", () => {
    const { container } = setup({ data });
    expect(container.querySelectorAll("img")[0].getAttribute("src")).toBe(
      data.image.medium
    );
  });

  it("shouldn't render image", () => {
    const newData = { ...data, image: { ...data.image, medium: "" } };
    const { container } = setup({ data: newData });
    expect(container.querySelectorAll("img")[0].getAttribute("src")).toBe("");
  });

  it("should render name", () => {
    const { getByText } = setup({ data });
    expect(getByText(data.name)).toBeTruthy();
  });

  it("default data mount", async () => {
    const { findByText } = setupApp();
    expect(await findByText("Kirby Buckets")).toBeTruthy();
    screen.debug();
  });
});
