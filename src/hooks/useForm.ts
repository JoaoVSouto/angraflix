import { useState } from 'react';

interface HTMLFormFieldElement extends HTMLElement {
  name: string;
  value: string;
}

type UseFormReturn<T> = [T, (target: HTMLFormFieldElement) => void, () => void];

export function useForm<T>(initialValues: T): UseFormReturn<T> {
  const [formData, setFormData] = useState<T>(initialValues);

  function changeFormData(target: HTMLFormFieldElement): void {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  function resetFormData(): void {
    setFormData(initialValues);
  }

  return [formData, changeFormData, resetFormData];
}
