"use client";
import { DropdownMenu, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const DropDown = () => {
  return (
    <Flex gap="3" align="center">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Flex direction={"row"} className="cursor-pointer" align={"center"}>
            <div>Category</div>
            <IoChevronDownOutline />
          </Flex>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content size="2">
          <DropdownMenu.Item shortcut="">
            <Link href="news">News</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <Link href="sports">Sports</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <Link href="food">Food</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <Link href="travel">Travel</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
};

export default DropDown;
