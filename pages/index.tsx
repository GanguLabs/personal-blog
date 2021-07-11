import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex, useColorMode, Button } from "@chakra-ui/react";
import WithSubnavigation from "../components/Header";
import Container from "../components/Container";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  return <>Something</>;
}
