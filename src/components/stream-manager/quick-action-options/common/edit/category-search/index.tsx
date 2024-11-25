"use client"

import * as React from "react"
import { axiosHttpErrorHandler } from "@/utils/common"
import type { CategoryEntity } from "@modules/user/domain/entity/category.entity"
import { LivestreamRepository } from "@modules/user/infrastructure/repository/livestream.repository"
import { toast } from "sonner"

import { useDebounce } from "@/hooks/useDebounce.hooks"
import { type InputProps } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import SimpleBar from "@/components/simplebar"
import {
  CategoryDetailsContainer,
  CategoryDetailsContentContainer,
  CategoryDetailsContentOverlay,
  CategoryDetailsContentText,
  CategoryDetailsContentWrapper,
  CategoryDetailsImage,
  CategoryDetailsImageContainer,
  CategoryDetailsImageInnerContainer,
  CategoryDetailsImageInnerWrapper,
  CategoryDetailsImageOverlay,
  CategoryDetailsImagePlaceholder,
  CategoryDetailsImageWrapper,
  CategoryDetailsOverlay,
  CategoryDetailsWrapper,
  CategorySearchLayoutWrapper,
  NoResultWrapper,
  RemoveCurrentCategoryButtonContainer,
  RemoveCurrentCategoryButtonOverlay,
  RemoveCurrentCategoryButtonWrapper,
  RemoveCurrentCategoryWrapper,
  ResultItemButton,
  ResultItemContentWrapper,
  ResultItemImage,
  ResultItemInfoWrapper,
  ResultItemTitle,
  SearchIcon,
  SearchIconLayoutContainer,
  SearchIconLayoutWrapper,
  SearchInput,
  SearchResultLayoutContainer,
  SearchResultLayoutOverlay,
  SearchResultLayoutWrapper,
  Wrapper,
} from "@/components/stream-manager/quick-action-options/common/edit/category-search/style"

type SelectTagInputProps = Omit<InputProps, "value" | "onChange"> & {
  value: string
  onChange: (...event: any[]) => void
}

const CategorySearch = ({ value, onChange }: SelectTagInputProps) => {
  const [searchValue, setSearchValue] = React.useState("")
  const [isDropdownOpen, setDropdownOpen] = React.useState(false)
  const [isFetchingCategory, startFetchingCategory] = React.useTransition()

  const [categories, setCategories] = React.useState<CategoryEntity[]>()

  const [category, setCategory] = React.useState<CategoryEntity>()

  const debouncedQuery = useDebounce(searchValue, 300)

  const handleSelectCategory = (category: CategoryEntity) => {
    if (isFetchingCategory) return

    console.log(category)

    onChange(category.id)
    setCategory(category)

    setSearchValue("")
    setDropdownOpen(false)
  }

  const unselectCategory = () => {
    onChange("")
    setCategory(undefined)
  }

  React.useEffect(() => {
    if (!debouncedQuery) return

    async function fetchData() {
      try {
        const { data } = await LivestreamRepository.searchCategoryByName({
          keyword: debouncedQuery,
        })

        setCategories(data.data)
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    }

    startFetchingCategory(fetchData)
  }, [debouncedQuery])

  return (
    <Wrapper>
      <CategorySearchLayoutWrapper>
        {value.length === 0 && (
          <>
            <SearchIconLayoutWrapper>
              <SearchIconLayoutContainer>
                <SearchIcon />
              </SearchIconLayoutContainer>
            </SearchIconLayoutWrapper>

            <SearchInput
              value={searchValue}
              placeholder={"Search category"}
              onChange={(e) => {
                setSearchValue(e.target.value)
                setDropdownOpen(true)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === ",") {
                  e.preventDefault()
                } else if (
                  e.key === "Backspace" &&
                  searchValue.length === 0 &&
                  value.length > 0
                ) {
                  e.preventDefault()
                  onChange(value)
                }
              }}
            />
          </>
        )}

        {category && (
          <CategoryDetailsWrapper>
            <CategoryDetailsContainer>
              <CategoryDetailsOverlay>
                <CategoryDetailsContentWrapper>
                  <CategoryDetailsContentContainer>
                    <CategoryDetailsContentOverlay>
                      <CategoryDetailsContentText>
                        {category.name}
                      </CategoryDetailsContentText>
                    </CategoryDetailsContentOverlay>
                  </CategoryDetailsContentContainer>
                </CategoryDetailsContentWrapper>

                <CategoryDetailsImageWrapper>
                  <CategoryDetailsImageContainer>
                    <CategoryDetailsImageOverlay>
                      <CategoryDetailsImageInnerWrapper>
                        <CategoryDetailsImageInnerContainer>
                          <CategoryDetailsImagePlaceholder />

                          <CategoryDetailsImage src={category.image} />
                        </CategoryDetailsImageInnerContainer>
                      </CategoryDetailsImageInnerWrapper>
                    </CategoryDetailsImageOverlay>
                  </CategoryDetailsImageContainer>
                </CategoryDetailsImageWrapper>

                <RemoveCurrentCategoryWrapper>
                  <RemoveCurrentCategoryButtonWrapper
                    onClick={unselectCategory}
                  >
                    <RemoveCurrentCategoryButtonContainer>
                      <RemoveCurrentCategoryButtonOverlay>
                        <Icons.closeX />
                      </RemoveCurrentCategoryButtonOverlay>
                    </RemoveCurrentCategoryButtonContainer>
                  </RemoveCurrentCategoryButtonWrapper>
                </RemoveCurrentCategoryWrapper>
              </CategoryDetailsOverlay>
            </CategoryDetailsContainer>
          </CategoryDetailsWrapper>
        )}
      </CategorySearchLayoutWrapper>

      {isDropdownOpen && !isFetchingCategory && (
        <SearchResultLayoutWrapper>
          <SearchResultLayoutContainer>
            <SearchResultLayoutOverlay>
              <SimpleBar
                style={{
                  maxHeight: "300px",
                }}
              >
                <div>
                  {categories ? (
                    categories.map((category, index) => (
                      <ResultItemButton
                        key={index}
                        role={"option"}
                        type={"button"}
                        onClick={() => {
                          handleSelectCategory(category)
                        }}
                      >
                        <ResultItemContentWrapper>
                          <ResultItemImage src={category.image} />

                          <ResultItemInfoWrapper>
                            <ResultItemTitle>{category.name}</ResultItemTitle>
                          </ResultItemInfoWrapper>
                        </ResultItemContentWrapper>
                      </ResultItemButton>
                    ))
                  ) : (
                    <NoResultWrapper>
                      <p>No results found</p>
                    </NoResultWrapper>
                  )}
                </div>
              </SimpleBar>
            </SearchResultLayoutOverlay>
          </SearchResultLayoutContainer>
        </SearchResultLayoutWrapper>
      )}

      {/*{isDropdownOpen && pendingDataPoint && (*/}
      {/*  <ul*/}
      {/*    className="absolute left-0 mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-200 bg-white py-1*/}
      {/*    text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:border-neutral-800 dark:bg-neutral-950"*/}
      {/*    role="listbox"*/}
      {/*  >*/}
      {/*    {options.filter(*/}
      {/*      (option) =>*/}
      {/*        option.label*/}
      {/*          .toLowerCase()*/}
      {/*          .includes(pendingDataPoint.toLowerCase()) &&*/}
      {/*        !value.includes(option.value)*/}
      {/*    ).length > 0 ? (*/}
      {/*      options*/}
      {/*        .filter(*/}
      {/*          (option) =>*/}
      {/*            option.label*/}
      {/*              .toLowerCase()*/}
      {/*              .includes(pendingDataPoint.toLowerCase()) &&*/}
      {/*            !value.includes(option.value)*/}
      {/*        )*/}
      {/*        .map((option) => (*/}
      {/*          <li*/}
      {/*            key={option.value}*/}
      {/*            className="cursor-pointer select-none px-4 py-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"*/}
      {/*            onClick={() => addPendingDataPoint(option)}*/}
      {/*          >*/}
      {/*            {option.label}*/}
      {/*          </li>*/}
      {/*        ))*/}
      {/*    ) : (*/}
      {/*      <li className="cursor-not-allowed select-none px-4 py-2 text-neutral-500 dark:text-neutral-400">*/}
      {/*        No options found*/}
      {/*      </li>*/}
      {/*    )}*/}
      {/*  </ul>*/}
      {/*)}*/}
    </Wrapper>
  )
}

export { CategorySearch }
